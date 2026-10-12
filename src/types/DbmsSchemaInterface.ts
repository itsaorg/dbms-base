/**
 * The field names a store record is made of.
 *
 * 💡 Each entry is a field name, in the order callers should read them.
 *
 * @example
 * ```ts
 * import type { DbmsSchemaInterface } from "@itsaorg/dbms-base";
 *
 * function firstField(schema: DbmsSchemaInterface): string | undefined {
 *   return schema.fields[0];
 * }
 * ```
 *
 * @see {@link DbmsSchema}
 */
export interface DbmsSchemaInterface {
  /** Field names in read order. */
  readonly fields: readonly string[];
}
