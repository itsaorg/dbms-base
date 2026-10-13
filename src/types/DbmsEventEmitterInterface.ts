import type { DbmsEventMap } from "./DbmsEventMap.js";

/**
 * Subscribes to DBMS events and sends them.
 *
 * 💡 Implement this when you need the three methods without the base class.
 *
 * @example
 * ```ts
 * import type { DbmsEventEmitterInterface } from "@itsaorg/dbms-base";
 *
 * function listen(events: DbmsEventEmitterInterface): void {
 *   events.on("store:open", (payload) => payload.storeType);
 * }
 * ```
 *
 * @see {@link DbmsEventMap}
 */
export interface DbmsEventEmitterInterface {
  /**
   * Registers a listener for one event name.
   *
   * @param event - The event to listen for.
   * @param listener - Called with that event's payload.
   */
  on<K extends keyof DbmsEventMap>(event: K, listener: (payload: DbmsEventMap[K]) => void): void;

  /**
   * Removes one listener for an event name.
   *
   * @param event - The event the listener was registered for.
   * @param listener - The same function passed to `on`.
   */
  off<K extends keyof DbmsEventMap>(event: K, listener: (payload: DbmsEventMap[K]) => void): void;

  /**
   * Calls every listener registered for an event name.
   *
   * @param event - The event to send.
   * @param payload - The value listeners receive.
   */
  emit<K extends keyof DbmsEventMap>(event: K, payload: DbmsEventMap[K]): void;
}
