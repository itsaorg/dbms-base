import type { StoreType } from "../enums/StoreType.js";
import type { DbmsEventEmitterInterface } from "./DbmsEventEmitterInterface.js";

export interface DbmsStoreInterface extends DbmsEventEmitterInterface {
  readonly storeType: StoreType;
  readonly opened: boolean;
}
