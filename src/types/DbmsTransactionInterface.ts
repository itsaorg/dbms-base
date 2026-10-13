import type { DbmsEventEmitterInterface } from "./DbmsEventEmitterInterface.js";

/**
 * A unit of work that can commit or roll back.
 *
 * 💡 Call `commit` to keep the work, or `rollback` to drop it.
 *
 * @example
 * ```ts
 * import type { DbmsTransactionInterface } from "@itsaorg/dbms-base";
 *
 * function finish(transaction: DbmsTransactionInterface): void {
 *   transaction.commit();
 * }
 * ```
 *
 * @see {@link DbmsTransaction}
 */
export interface DbmsTransactionInterface extends DbmsEventEmitterInterface {
  /** The identifier sent with transaction events. */
  readonly id: string;

  /** Keeps the work done in this transaction. */
  commit(): void;

  /** Drops the work done in this transaction. */
  rollback(): void;
}
