import type { DbmsIndexInterface } from "../types/DbmsIndexInterface.js";

/**
 * An index over one or more fields.
 *
 * 💡 Pass the key fields to `super` from your subclass constructor.
 *
 * @example
 * ```ts
 * import { DbmsIndex } from "@itsaorg/dbms-base";
 *
 * class ByTitle extends DbmsIndex {
 *   constructor() {
 *     super(["title"]);
 *   }
 * }
 * ```
 *
 * @see {@link DbmsIndexInterface}
 */
export abstract class DbmsIndex implements DbmsIndexInterface {
  /** Field names that form the index key. */
  readonly fields: readonly string[];

  /**
   * Records the index key.
   *
   * @param fields - Field names from the first key part to the last.
   */
  protected constructor(fields: readonly string[]) {
    this.fields = fields;
  }
}
