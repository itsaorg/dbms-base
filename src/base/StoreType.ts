/**
 * Names the kind of data a store holds.
 *
 * 💡 Use these values when you construct a store. Each member is a stable string.
 *
 * @example
 * ```ts
 * import { StoreType } from "@itsaorg/dbms-base";
 *
 * const kind = StoreType.Docstore;
 * ```
 *
 * @see {@link DbmsStore}
 */
export enum StoreType {
  /** A document store. */
  Docstore = "docstore",
  /** A key-value store. */
  KvStore = "kvstore",
  /** A relational store. */
  Relational = "relational",
  /** A time-series store. */
  Timeseries = "timeseries",
  /** An append-only ledger. */
  Ledger = "ledger",
  /** A graph store. */
  Graph = "graph",
  /** A vector store. */
  Vector = "vector",
  /** A search store. */
  Search = "search",
  /** A blob store. */
  Blob = "blob",
}
