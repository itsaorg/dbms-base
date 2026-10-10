import { DbmsEventEmitter } from "./DbmsEventEmitter.js";
import type { DbmsTransactionInterface } from "../types/DbmsTransactionInterface.js";

export abstract class DbmsTransaction extends DbmsEventEmitter implements DbmsTransactionInterface {
  readonly id: string;

  protected constructor(id: string) {
    super();
    this.id = id;
    this.emit("transaction:begin", { transactionId: id });
  }

  commit(): void {
    this.emit("transaction:commit", { transactionId: this.id });
  }

  rollback(): void {
    this.emit("transaction:abort", { transactionId: this.id });
  }
}
