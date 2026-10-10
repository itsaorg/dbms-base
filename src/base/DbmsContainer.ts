import type { DbmsContainerInterface } from "../types/DbmsContainerInterface.js";

export abstract class DbmsContainer implements DbmsContainerInterface {
  readonly name: string;

  protected constructor(name: string) {
    this.name = name;
  }
}
