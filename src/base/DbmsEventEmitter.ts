import type { DbmsEventMap } from "../events/DbmsEventMap.js";
import type { DbmsEventEmitterInterface } from "../types/DbmsEventEmitterInterface.js";

export abstract class DbmsEventEmitter implements DbmsEventEmitterInterface {
  readonly #listeners = new Map<
    keyof DbmsEventMap,
    Set<(payload: DbmsEventMap[keyof DbmsEventMap]) => void>
  >();

  on<K extends keyof DbmsEventMap>(event: K, listener: (payload: DbmsEventMap[K]) => void): void {
    const set =
      this.#listeners.get(event) ?? new Set<(payload: DbmsEventMap[keyof DbmsEventMap]) => void>();
    set.add(listener as (payload: DbmsEventMap[keyof DbmsEventMap]) => void);
    this.#listeners.set(event, set);
  }

  off<K extends keyof DbmsEventMap>(event: K, listener: (payload: DbmsEventMap[K]) => void): void {
    this.#listeners
      .get(event)
      ?.delete(listener as (payload: DbmsEventMap[keyof DbmsEventMap]) => void);
  }

  emit<K extends keyof DbmsEventMap>(event: K, payload: DbmsEventMap[K]): void {
    for (const listener of this.#listeners.get(event) ?? []) {
      (listener as (payload: DbmsEventMap[K]) => void)(payload);
    }
  }
}
