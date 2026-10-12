import type { StoreType } from "./StoreType.js";
import { DbmsEventEmitter } from "./DbmsEventEmitter.js";
import type { DbmsStoreInterface } from "../types/DbmsStoreInterface.js";

/**
 * A store with a kind and an open flag.
 *
 * 💡 Pass the kind and the open flag to `super` from your subclass constructor.
 *
 * @example
 * ```ts
 * import { DbmsStore, StoreType } from "@itsaorg/dbms-base";
 *
 * class Docs extends DbmsStore {
 *   constructor() {
 *     super(StoreType.Docstore, false);
 *   }
 * }
 * ```
 *
 * @see {@link DbmsStoreInterface}
 */
export abstract class DbmsStore extends DbmsEventEmitter implements DbmsStoreInterface {
  /** The kind of data this store holds. */
  readonly storeType: StoreType;
  /** True after the store has opened. */
  readonly opened: boolean;

  /**
   * Records the store kind and whether it is open.
   *
   * @param storeType - The kind of data this store holds.
   * @param opened - True when the store is ready.
   */
  protected constructor(storeType: StoreType, opened: boolean) {
    super();
    this.storeType = storeType;
    this.opened = opened;
  }
}
