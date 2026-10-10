import type { DbmsSchemaInterface } from "../types/DbmsSchemaInterface.js";

export abstract class DbmsSchema implements DbmsSchemaInterface {
  readonly fields: readonly string[];

  protected constructor(fields: readonly string[]) {
    this.fields = fields;
  }
}
