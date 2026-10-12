import type { DbmsQueryInterface } from "../types/DbmsQueryInterface.js";

/**
 * A read or a write.
 *
 * 💡 Pass `"read"` or `"write"` to `super` from your subclass constructor.
 *
 * @example
 * ```ts
 * import { DbmsQuery } from "@itsaorg/dbms-base";
 *
 * class FindNote extends DbmsQuery {
 *   constructor() {
 *     super("read");
 *   }
 * }
 * ```
 *
 * @see {@link DbmsQueryInterface}
 */
export abstract class DbmsQuery implements DbmsQueryInterface {
  /** Whether this query reads or writes. */
  readonly kind: "read" | "write";

  /**
   * Records whether the query reads or writes.
   *
   * @param kind - `"read"` or `"write"`.
   */
  protected constructor(kind: "read" | "write") {
    this.kind = kind;
  }
}
