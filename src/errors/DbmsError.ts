import { DbmsErrorCode } from "./DbmsErrorCode.js";

export class DbmsError extends Error {
  readonly code: DbmsErrorCode;

  constructor(code: DbmsErrorCode, message: string) {
    super(message);
    this.name = "DbmsError";
    this.code = code;
  }
}
