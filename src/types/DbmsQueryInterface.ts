/**
 * A request that either reads or writes.
 *
 * 💡 `kind` is `"read"` or `"write"`.
 *
 * @example
 * ```ts
 * import type { DbmsQueryInterface } from "@itsaorg/dbms-base";
 *
 * function writes(query: DbmsQueryInterface): boolean {
 *   return query.kind === "write";
 * }
 * ```
 *
 * @see {@link DbmsQuery}
 */
export interface DbmsQueryInterface {
  /** Whether this query reads or writes. */
  readonly kind: "read" | "write";
}
