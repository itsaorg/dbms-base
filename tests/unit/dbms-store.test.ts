import { describe, expect, it } from "vitest";
import { StoreType } from "../../src/enums/StoreType.js";
import { DbmsStore } from "../../src/base/DbmsStore.js";

class TestStore extends DbmsStore {
  constructor() {
    super(StoreType.Docstore, true);
  }
}

describe("DbmsStore", () => {
  it("reports its paradigm and open state", () => {
    const store = new TestStore();
    expect(store.storeType).toBe(StoreType.Docstore);
    expect(store.opened).toBe(true);
  });
});
