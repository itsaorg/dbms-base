import type { DbmsIndexInterface } from "../types/DbmsIndexInterface.js";

export abstract class DbmsIndex implements DbmsIndexInterface {
  readonly fields: readonly string[];

  protected constructor(fields: readonly string[]) {
    this.fields = fields;
  }
}
