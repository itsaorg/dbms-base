export interface DbmsEventMap {
  "store:open": { readonly storeType: string };
  "store:close": { readonly storeType: string };
  "store:error": { readonly message: string };
  "query:start": { readonly queryId: string };
  "query:end": { readonly queryId: string };
  "query:error": { readonly message: string };
  "transaction:begin": { readonly transactionId: string };
  "transaction:commit": { readonly transactionId: string };
  "transaction:abort": { readonly transactionId: string };
  "transaction:error": { readonly message: string };
}
