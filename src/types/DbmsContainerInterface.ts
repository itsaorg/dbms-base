/**
 * A named group that holds other DBMS records.
 *
 * 💡 The name is how a caller tells one container from another.
 *
 * @example
 * ```ts
 * import type { DbmsContainerInterface } from "@itsaorg/dbms-base";
 *
 * function label(container: DbmsContainerInterface): string {
 *   return container.name;
 * }
 * ```
 *
 * @see {@link DbmsContainer}
 */
export interface DbmsContainerInterface {
  /** The container name. */
  readonly name: string;
}
