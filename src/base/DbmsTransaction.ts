import { DbmsEventEmitter } from "./DbmsEventEmitter.js";
import type { DbmsTransactionInterface } from "../types/DbmsTransactionInterface.js";

/**
 * A transaction that announces begin, commit, and abort.
 *
 * 💡 Constructing it sends `transaction:begin`.
 *
 * @example
 * ```ts
 * import { DbmsTransaction } from "@itsaorg/dbms-base";
 *
 * class Unit extends DbmsTransaction {
 *   constructor() {
 *     super("txn-1");
 *   }
 * }
 *
 * new Unit().commit();
 * ```
 *
 * @see {@link DbmsTransactionInterface}
 */
export abstract class DbmsTransaction extends DbmsEventEmitter implements DbmsTransactionInterface {
  /** The identifier sent with transaction events. */
  readonly id: string;

  /**
   * Starts a transaction and sends `transaction:begin`.
   *
   * @param id - The identifier listeners will see.
   */
  protected constructor(id: string) {
    super();
    this.id = id;
    this.emit("transaction:begin", { transactionId: id });
  }

  /** Sends `transaction:commit` for this id. */
  commit(): void {
    this.emit("transaction:commit", { transactionId: this.id });
  }

  /** Sends `transaction:abort` for this id. */
  rollback(): void {
    this.emit("transaction:abort", { transactionId: this.id });
  }
}
