import type { StoreType } from "../enums/StoreType.js";
import { DbmsEventEmitter } from "./DbmsEventEmitter.js";
import type { DbmsStoreInterface } from "../types/DbmsStoreInterface.js";

export abstract class DbmsStore extends DbmsEventEmitter implements DbmsStoreInterface {
  readonly storeType: StoreType;
  readonly opened: boolean;

  protected constructor(storeType: StoreType, opened: boolean) {
    super();
    this.storeType = storeType;
    this.opened = opened;
  }
}
