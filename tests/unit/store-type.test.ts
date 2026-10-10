import { describe, expect, it } from "vitest";
import { StoreType } from "../../src/enums/StoreType.js";

const approved = [
  "docstore",
  "kvstore",
  "relational",
  "timeseries",
  "ledger",
  "graph",
  "vector",
  "search",
  "blob",
];

describe("StoreType", () => {
  it("exports only the nine approved paradigms", () => {
    expect(Object.values(StoreType).sort()).toEqual([...approved].sort());
  });
});
