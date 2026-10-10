import type { DbmsQueryInterface } from "../types/DbmsQueryInterface.js";

export abstract class DbmsQuery implements DbmsQueryInterface {
  readonly kind: "read" | "write";

  protected constructor(kind: "read" | "write") {
    this.kind = kind;
  }
}
