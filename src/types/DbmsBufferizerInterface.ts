/**
 * Turns a payload into a DBMS byte frame and reads it back.
 *
 * 💡 `encode` adds the header. `decode` checks it and returns the payload.
 *
 * @example
 * ```ts
 * import type { DbmsBufferizerInterface } from "@itsaorg/dbms-base";
 *
 * function roundTrip(codec: DbmsBufferizerInterface, payload: Uint8Array): Uint8Array {
 *   return codec.decode(codec.encode(payload));
 * }
 * ```
 *
 * @see {@link DbmsBufferizer}
 */
export interface DbmsBufferizerInterface {
  /**
   * Wraps a payload in a DBMS envelope.
   *
   * @param payload - The bytes to frame.
   * @returns The header followed by the payload.
   */
  encode(payload: Uint8Array): Uint8Array;

  /**
   * Reads a payload out of a DBMS envelope.
   *
   * @param buffer - The framed bytes.
   * @returns The payload that was framed.
   */
  decode(buffer: Uint8Array): Uint8Array;
}
