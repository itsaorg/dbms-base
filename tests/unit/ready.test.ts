import { describe, expect, it } from "vitest";
import { dbmsBaseReady } from "../../src/index.js";

describe("dbms-base", () => {
  it("exports the placeholder", () => {
    expect(dbmsBaseReady()).toBe(true);
  });
});
