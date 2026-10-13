import { describe, expect, it } from "vitest";
import { DbmsEntity } from "../../src/base/DbmsEntity.js";

class TestEntity extends DbmsEntity {
  constructor() {
    super("entity-1");
  }
}

describe("DbmsEntity", () => {
  it("keeps an identity separate from its encoding", () => {
    expect(new TestEntity().id).toBe("entity-1");
  });
});
