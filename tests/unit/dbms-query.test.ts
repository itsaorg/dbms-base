import { describe, expect, it } from "vitest";
import { DbmsQuery } from "../../src/base/DbmsQuery.js";

class TestQuery extends DbmsQuery {
  constructor() {
    super("read");
  }
}

describe("DbmsQuery", () => {
  it("describes a read without executing it", () => {
    expect(new TestQuery().kind).toBe("read");
  });
});
