export interface DbmsBufferizerInterface {
  encode(payload: Uint8Array): Uint8Array;
  decode(buffer: Uint8Array): Uint8Array;
}
