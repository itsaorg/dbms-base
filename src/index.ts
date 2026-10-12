/**
 * Contracts for Itsa DBMS stores, queries, transactions, and buffer frames.
 *
 * 💡 Import names from this package root.
 *
 * @example
 * ```ts
 * import { StoreType, DbmsErrorCode } from "@itsaorg/dbms-base";
 * ```
 *
 * @packageDocumentation
 */
export { StoreType, DbmsErrorCode } from "./enums/index.js";
export type {
  DbmsBufferizerInterface,
  DbmsContainerInterface,
  DbmsEntityInterface,
  DbmsEventEmitterInterface,
  DbmsEventMap,
  DbmsIndexInterface,
  DbmsQueryInterface,
  DbmsSchemaInterface,
  DbmsStoreInterface,
  DbmsTransactionInterface,
} from "./types/index.js";
export {
  DbmsBufferizer,
  DbmsContainer,
  DbmsEntity,
  DbmsError,
  DbmsEventEmitter,
  DbmsIndex,
  DbmsQuery,
  DbmsSchema,
  DbmsStore,
  DbmsTransaction,
} from "./base/index.js";
