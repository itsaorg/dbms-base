/**
 * One addressable record.
 *
 * 💡 The id stays the same for the life of the record.
 *
 * @example
 * ```ts
 * import type { DbmsEntityInterface } from "@itsaorg/dbms-base";
 *
 * function identity(entity: DbmsEntityInterface): string {
 *   return entity.id;
 * }
 * ```
 *
 * @see {@link DbmsEntity}
 */
export interface DbmsEntityInterface {
  /** The record identifier. */
  readonly id: string;
}
