import { describe, expect, it } from "vitest";
import { DbmsEventEmitter } from "../../src/base/DbmsEventEmitter.js";

class TestEmitter extends DbmsEventEmitter {}

describe("DbmsEventEmitter", () => {
  it("emits only to listeners that are still registered", () => {
    const emitter = new TestEmitter();
    const seen: string[] = [];
    const listener = (payload: { readonly message: string }) => {
      seen.push(payload.message);
    };
    emitter.on("store:error", listener);
    emitter.emit("store:error", { message: "first" });
    emitter.off("store:error", listener);
    emitter.emit("store:error", { message: "second" });
    expect(seen).toEqual(["first"]);
  });
});
