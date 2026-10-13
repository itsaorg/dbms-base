/**
 * Maps each DBMS event name to the payload a listener receives.
 *
 * 💡 The event name selects the payload type, so a listener cannot read the wrong fields.
 *
 * @example
 * ```ts
 * import type { DbmsEventMap } from "@itsaorg/dbms-base";
 *
 * const opened: DbmsEventMap["store:open"] = { storeType: "docstore" };
 * ```
 *
 * @see {@link DbmsEventEmitter}
 */
export interface DbmsEventMap {
  /** A store finished opening. */
  "store:open": { readonly storeType: string };
  /** A store finished closing. */
  "store:close": { readonly storeType: string };
  /** A store reported a failure. */
  "store:error": { readonly message: string };
  /** A query started. */
  "query:start": { readonly queryId: string };
  /** A query finished. */
  "query:end": { readonly queryId: string };
  /** A query reported a failure. */
  "query:error": { readonly message: string };
  /** A transaction started. */
  "transaction:begin": { readonly transactionId: string };
  /** A transaction committed. */
  "transaction:commit": { readonly transactionId: string };
  /** A transaction aborted. */
  "transaction:abort": { readonly transactionId: string };
  /** A transaction reported a failure. */
  "transaction:error": { readonly message: string };
}
