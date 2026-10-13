import { describe, expect, it } from "vitest";
import type { DbmsEventMap } from "../../src/types/DbmsEventMap.js";

describe("DbmsEventMap", () => {
  it("types a lifecycle payload by event name", () => {
    const payload: DbmsEventMap["store:open"] = { storeType: "docstore" };
    expect(payload.storeType).toBe("docstore");
  });
});
