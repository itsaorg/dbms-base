import type { DbmsSchemaInterface } from "../types/DbmsSchemaInterface.js";

/**
 * An ordered list of field names.
 *
 * 💡 Pass the field names to `super` from your subclass constructor.
 *
 * @example
 * ```ts
 * import { DbmsSchema } from "@itsaorg/dbms-base";
 *
 * class NoteSchema extends DbmsSchema {
 *   constructor() {
 *     super(["id", "title"]);
 *   }
 * }
 * ```
 *
 * @see {@link DbmsSchemaInterface}
 */
export abstract class DbmsSchema implements DbmsSchemaInterface {
  /** Field names in read order. */
  readonly fields: readonly string[];

  /**
   * Records the field names.
   *
   * @param fields - Field names in read order.
   */
  protected constructor(fields: readonly string[]) {
    this.fields = fields;
  }
}
