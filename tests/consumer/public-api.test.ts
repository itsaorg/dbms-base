import { describe, expect, it } from "vitest";
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { StoreType } from "../../src/index.js";

describe("public API", () => {
  it("exports the contracts from the package entry", () => {
    expect(StoreType.Docstore).toBe("docstore");
    const pkg = JSON.parse(
      readFileSync(new URL("../../package.json", import.meta.url), "utf8"),
    ) as {
      exports: Record<string, unknown>;
      dependencies?: Record<string, string>;
    };
    expect(Object.keys(pkg.exports)).toEqual(["."]);
    expect(pkg.dependencies ?? {}).toEqual({});
  });

  it("rejects a deep import", () => {
    expect(() =>
      execFileSync(
        process.execPath,
        ["--input-type=module", "-e", "await import('@itsaorg/dbms-base/src/base/StoreType.js')"],
        { stdio: "pipe" },
      ),
    ).toThrow();
  });
});
