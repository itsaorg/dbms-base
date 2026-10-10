import { describe, expect, it } from "vitest";
import { DbmsContainer } from "../../src/base/DbmsContainer.js";

class TestContainer extends DbmsContainer {
  constructor() {
    super("documents");
  }
}

describe("DbmsContainer", () => {
  it("keeps a stable name", () => {
    expect(new TestContainer().name).toBe("documents");
  });
});
