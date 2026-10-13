/**
 * Fields used to look a record up.
 *
 * 💡 The list is the index key, from the first field to the last.
 *
 * @example
 * ```ts
 * import type { DbmsIndexInterface } from "@itsaorg/dbms-base";
 *
 * function keyOf(index: DbmsIndexInterface): readonly string[] {
 *   return index.fields;
 * }
 * ```
 *
 * @see {@link DbmsIndex}
 */
export interface DbmsIndexInterface {
  /** Field names that form the index key. */
  readonly fields: readonly string[];
}
