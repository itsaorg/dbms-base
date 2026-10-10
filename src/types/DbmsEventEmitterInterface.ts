import type { DbmsEventMap } from "../events/DbmsEventMap.js";

export interface DbmsEventEmitterInterface {
  on<K extends keyof DbmsEventMap>(event: K, listener: (payload: DbmsEventMap[K]) => void): void;
  off<K extends keyof DbmsEventMap>(event: K, listener: (payload: DbmsEventMap[K]) => void): void;
  emit<K extends keyof DbmsEventMap>(event: K, payload: DbmsEventMap[K]): void;
}
