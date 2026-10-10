import type { DbmsEventEmitterInterface } from "./DbmsEventEmitterInterface.js";

export interface DbmsTransactionInterface extends DbmsEventEmitterInterface {
  readonly id: string;
  commit(): void;
  rollback(): void;
}
