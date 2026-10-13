import type { DbmsEntityInterface } from "../types/DbmsEntityInterface.js";

/**
 * A record with a stable id.
 *
 * 💡 Pass the id to `super` from your subclass constructor.
 *
 * @example
 * ```ts
 * import { DbmsEntity } from "@itsaorg/dbms-base";
 *
 * class Note extends DbmsEntity {
 *   constructor() {
 *     super("note-1");
 *   }
 * }
 * ```
 *
 * @see {@link DbmsEntityInterface}
 */
export abstract class DbmsEntity implements DbmsEntityInterface {
  /** The record identifier. */
  readonly id: string;

  /**
   * Records the entity id.
   *
   * @param id - The identifier that stays with this record.
   */
  protected constructor(id: string) {
    this.id = id;
  }
}
