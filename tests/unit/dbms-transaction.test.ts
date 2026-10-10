import { describe, expect, it } from "vitest";
import { DbmsTransaction } from "../../src/base/DbmsTransaction.js";

class TestTransaction extends DbmsTransaction {
  constructor() {
    super("tx-1");
  }
}

describe("DbmsTransaction", () => {
  it("emits commit and abort for an explicit transaction", () => {
    const seen: string[] = [];
    const tx = new TestTransaction();
    tx.on("transaction:commit", (payload) => seen.push(payload.transactionId));
    tx.on("transaction:abort", () => seen.push("abort"));
    tx.commit();
    tx.rollback();
    expect(tx.id).toBe("tx-1");
    expect(seen).toEqual(["tx-1", "abort"]);
  });
});
