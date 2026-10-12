import { DbmsErrorCode } from "../enums/DbmsErrorCode.js";

/**
 * An error carrying a stable {@link DbmsErrorCode}.
 *
 * 💡 Branch on `code`. The message is for people reading a log.
 *
 * @example
 * ```ts
 * import { DbmsError, DbmsErrorCode } from "@itsaorg/dbms-base";
 *
 * const error = new DbmsError(DbmsErrorCode.ChecksumMismatch, "Checksum failed.");
 * ```
 *
 * @see {@link DbmsErrorCode}
 */
export class DbmsError extends Error {
  /** The stable reason this error was thrown. */
  readonly code: DbmsErrorCode;

  /**
   * Creates an error for one buffer failure.
   *
   * @param code - The stable reason.
   * @param message - Text for a log or a debugger.
   */
  constructor(code: DbmsErrorCode, message: string) {
    super(message);
    this.name = "DbmsError";
    this.code = code;
  }
}
