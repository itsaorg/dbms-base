/**
 * Names for the ways a DBMS buffer can be rejected.
 *
 * 💡 Compare `error.code` with these members. Do not compare the message text.
 *
 * @example
 * ```ts
 * import { DbmsError, DbmsErrorCode } from "@itsaorg/dbms-base";
 *
 * throw new DbmsError(DbmsErrorCode.TruncatedBuffer, "Buffer ended early.");
 * ```
 *
 * @see {@link DbmsError}
 */
export enum DbmsErrorCode {
  /** The bytes are not a DBMS envelope. */
  InvalidEnvelope = "InvalidEnvelope",
  /** The envelope version is not supported. */
  UnsupportedVersion = "UnsupportedVersion",
  /** The byte length is shorter than the header or the declared payload. */
  TruncatedBuffer = "TruncatedBuffer",
  /** The payload checksum does not match the header. */
  ChecksumMismatch = "ChecksumMismatch",
}
