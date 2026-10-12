# @itsaorg/dbms-base

Zero-dependency TypeScript contracts for Itsa DBMS stores, queries, transactions, and buffer boundaries.

## Table of contents

- [@itsaorg/dbms-base](#itsaorgdbms-base)
  - [Table of contents](#table-of-contents)
  - [What this package is](#what-this-package-is)
  - [Requirements](#requirements)
  - [Install](#install)
  - [Example](#example)
  - [Project layout](#project-layout)
  - [Links](#links)

## What this package is

This package names the pieces a DBMS library shares: the kind of store, the events a store can send, the shape of a query or a transaction, and the byte frame wrapped around a payload.

You extend the classes. You do not write `new DbmsStore()`. `DbmsStore` is a starting point your own class builds on. The same is true for the other classes in `src/base`.

`DbmsError` is the exception. You construct that one with `new DbmsError(...)` when a buffer frame is rejected.

## Requirements

- Node.js 26
- TypeScript, for the type declarations
- No runtime dependencies

## Install

This package is not on npm until the first publish. After that, install it with:

```bash
npm install @itsaorg/dbms-base
```

Import names from `@itsaorg/dbms-base`. Do not import a file inside the package.

## Example

A document store starts from `DbmsStore` and records its kind with `StoreType.Docstore`.

```ts
import { DbmsStore, StoreType } from "@itsaorg/dbms-base";

class DocumentStore extends DbmsStore {
  constructor() {
    super(StoreType.Docstore, false);
  }
}

const docs = new DocumentStore();
```

`docs.storeType` is `"docstore"`. `docs.opened` is `false` until your subclass opens the store.

Each class, interface, and enum has a longer example in the [API reference](https://itsaorg.github.io/dbms-base/).

## Project layout

- `src/enums` holds the enumerations, including `StoreType` and `DbmsErrorCode`.
- `src/types` holds the interfaces, including `DbmsEventMap`.
- `src/base` holds the classes, including `DbmsStore` and `DbmsError`.

`src/index.ts` re-exports those names. That file is the public API.

## Links

- [API reference](https://itsaorg.github.io/dbms-base/)
- [Contributing](.github/CONTRIBUTING.md)
- [Code of Conduct](.github/CODE_OF_CONDUCT.md)
- [Security](.github/SECURITY.md)
- [License](LICENSE)
