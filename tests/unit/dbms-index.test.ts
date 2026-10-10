import { describe, expect, it } from "vitest";
import { DbmsIndex } from "../../src/base/DbmsIndex.js";

class TestIndex extends DbmsIndex {
  constructor() {
    super(["id"]);
  }
}

describe("DbmsIndex", () => {
  it("names the fields it covers", () => {
    expect(new TestIndex().fields).toEqual(["id"]);
  });
});
