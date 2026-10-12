import type { DbmsContainerInterface } from "../types/DbmsContainerInterface.js";

/**
 * A named container.
 *
 * 💡 Pass the name to `super` from your subclass constructor.
 *
 * @example
 * ```ts
 * import { DbmsContainer } from "@itsaorg/dbms-base";
 *
 * class Folder extends DbmsContainer {
 *   constructor() {
 *     super("notes");
 *   }
 * }
 * ```
 *
 * @see {@link DbmsContainerInterface}
 */
export abstract class DbmsContainer implements DbmsContainerInterface {
  /** The container name. */
  readonly name: string;

  /**
   * Records the container name.
   *
   * @param name - The name callers use to tell containers apart.
   */
  protected constructor(name: string) {
    this.name = name;
  }
}
