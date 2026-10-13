import { describe, expect, it } from "vitest";
import { DbmsSchema } from "../../src/base/DbmsSchema.js";

class TestSchema extends DbmsSchema {
  constructor() {
    super(["id", "name"]);
  }
}

describe("DbmsSchema", () => {
  it("describes fields without a driver", () => {
    expect(new TestSchema().fields).toEqual(["id", "name"]);
  });
});
