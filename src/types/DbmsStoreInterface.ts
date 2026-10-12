import type { StoreType } from "../base/StoreType.js";
import type { DbmsEventEmitterInterface } from "./DbmsEventEmitterInterface.js";

/**
 * A store that can open, close, and report its kind.
 *
 * 💡 `storeType` says what the store holds. `opened` says whether it is ready.
 *
 * @example
 * ```ts
 * import { StoreType, type DbmsStoreInterface } from "@itsaorg/dbms-base";
 *
 * function kindOf(store: DbmsStoreInterface): StoreType {
 *   return store.storeType;
 * }
 * ```
 *
 * @see {@link DbmsStore}
 */
export interface DbmsStoreInterface extends DbmsEventEmitterInterface {
  /** The kind of data this store holds. */
  readonly storeType: StoreType;
  /** True after the store has opened. */
  readonly opened: boolean;
}
