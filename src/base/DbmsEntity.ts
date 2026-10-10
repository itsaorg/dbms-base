import type { DbmsEntityInterface } from "../types/DbmsEntityInterface.js";

export abstract class DbmsEntity implements DbmsEntityInterface {
  readonly id: string;

  protected constructor(id: string) {
    this.id = id;
  }
}
