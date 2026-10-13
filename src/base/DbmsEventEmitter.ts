import type { DbmsEventMap } from "../types/DbmsEventMap.js";
import type { DbmsEventEmitterInterface } from "../types/DbmsEventEmitterInterface.js";

/**
 * Stores listeners and calls them when an event is sent.
 *
 * 💡 Subclass this when a type needs `on`, `off`, and `emit`.
 *
 * @example
 * ```ts
 * import { DbmsEventEmitter } from "@itsaorg/dbms-base";
 *
 * class Notices extends DbmsEventEmitter {}
 *
 * const notices = new Notices();
 * notices.on("store:open", (payload) => payload.storeType);
 * ```
 *
 * @see {@link DbmsEventEmitterInterface}
 */
export abstract class DbmsEventEmitter implements DbmsEventEmitterInterface {
  readonly #listeners = new Map<
    keyof DbmsEventMap,
    Set<(payload: DbmsEventMap[keyof DbmsEventMap]) => void>
  >();

  /**
   * Registers a listener for one event name.
   *
   * @param event - The event to listen for.
   * @param listener - Called with that event's payload.
   */
  on<K extends keyof DbmsEventMap>(event: K, listener: (payload: DbmsEventMap[K]) => void): void {
    const set =
      this.#listeners.get(event) ?? new Set<(payload: DbmsEventMap[keyof DbmsEventMap]) => void>();
    set.add(listener as (payload: DbmsEventMap[keyof DbmsEventMap]) => void);
    this.#listeners.set(event, set);
  }

  /**
   * Removes one listener for an event name.
   *
   * @param event - The event the listener was registered for.
   * @param listener - The same function passed to `on`.
   */
  off<K extends keyof DbmsEventMap>(event: K, listener: (payload: DbmsEventMap[K]) => void): void {
    this.#listeners
      .get(event)
      ?.delete(listener as (payload: DbmsEventMap[keyof DbmsEventMap]) => void);
  }

  /**
   * Calls every listener registered for an event name.
   *
   * @param event - The event to send.
   * @param payload - The value listeners receive.
   */
  emit<K extends keyof DbmsEventMap>(event: K, payload: DbmsEventMap[K]): void {
    for (const listener of this.#listeners.get(event) ?? []) {
      (listener as (payload: DbmsEventMap[K]) => void)(payload);
    }
  }
}
