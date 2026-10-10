import { describe, expect, it } from "vitest";
import { DbmsBufferizer } from "../../src/base/DbmsBufferizer.js";
import { DbmsError } from "../../src/errors/DbmsError.js";
import { DbmsErrorCode } from "../../src/errors/DbmsErrorCode.js";

class TestBufferizer extends DbmsBufferizer {}

describe("DbmsBufferizer", () => {
  it("round-trips a payload and rejects a bad checksum", () => {
    const codec = new TestBufferizer();
    const payload = new TextEncoder().encode("itsa");
    const frame = codec.encode(payload);
    expect(codec.decode(frame)).toEqual(payload);
    const broken = new Uint8Array(frame);
    broken[broken.length - 1] ^= 0xff;
    expect(() => codec.decode(broken)).toThrow(DbmsError);
    try {
      codec.decode(broken);
    } catch (error) {
      expect(error).toBeInstanceOf(DbmsError);
      expect((error as DbmsError).code).toBe(DbmsErrorCode.ChecksumMismatch);
    }
  });
});
