import { DbmsError } from "../errors/DbmsError.js";
import { DbmsErrorCode } from "../enums/DbmsErrorCode.js";
import type { DbmsBufferizerInterface } from "../types/DbmsBufferizerInterface.js";

const MAGIC = [0x44, 0x42, 0x4d, 0x53] as const;
const VERSION = 1;
const HEADER = 14;

function crc32(bytes: Uint8Array): number {
  let crc = 0xffffffff;
  for (const byte of bytes) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) {
      const mask = -(crc & 1);
      crc = (crc >>> 1) ^ (0xedb88320 & mask);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

/**
 * Frames bytes with a DBMS header and checks that header on the way back.
 *
 * 💡 Subclass it, then call `encode` and `decode`. A bad frame throws {@link DbmsError}.
 *
 * @example
 * ```ts
 * import { DbmsBufferizer } from "@itsaorg/dbms-base";
 *
 * class Frames extends DbmsBufferizer {}
 *
 * const frames = new Frames();
 * const payload = frames.decode(frames.encode(new Uint8Array([1, 2, 3])));
 * ```
 *
 * @see {@link DbmsBufferizerInterface}
 */
export abstract class DbmsBufferizer implements DbmsBufferizerInterface {
  /**
   * Wraps a payload in a DBMS envelope.
   *
   * @param payload - The bytes to frame.
   * @returns The header followed by the payload.
   */
  encode(payload: Uint8Array): Uint8Array {
    const frame = new Uint8Array(HEADER + payload.length);
    frame.set(MAGIC, 0);
    frame[4] = VERSION;
    frame[5] = 0;
    new DataView(frame.buffer).setUint32(6, payload.length);
    new DataView(frame.buffer).setUint32(10, crc32(payload));
    frame.set(payload, HEADER);
    return frame;
  }

  /**
   * Reads a payload out of a DBMS envelope.
   *
   * @param buffer - The framed bytes.
   * @returns The payload that was framed.
   */
  decode(buffer: Uint8Array): Uint8Array {
    if (buffer.length < HEADER) {
      throw new DbmsError(
        DbmsErrorCode.TruncatedBuffer,
        "Buffer is shorter than the envelope header.",
      );
    }
    const magicOk = MAGIC.every((byte, index) => buffer[index] === byte);
    if (!magicOk) {
      throw new DbmsError(DbmsErrorCode.InvalidEnvelope, "Buffer magic does not match DBMS.");
    }
    if (buffer[4] !== VERSION) {
      throw new DbmsError(DbmsErrorCode.UnsupportedVersion, "Buffer version is not supported.");
    }
    const view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    const length = view.getUint32(6);
    const checksum = view.getUint32(10);
    if (buffer.length < HEADER + length) {
      throw new DbmsError(DbmsErrorCode.TruncatedBuffer, "Buffer payload is truncated.");
    }
    const payload = buffer.slice(HEADER, HEADER + length);
    if (crc32(payload) !== checksum) {
      throw new DbmsError(
        DbmsErrorCode.ChecksumMismatch,
        "Buffer checksum does not match the payload.",
      );
    }
    return payload;
  }
}
