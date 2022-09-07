import { ChainEngineSdk } from "chainengine-sdk";
import { FetchType } from "chainengine-sdk/dist/nft/fetch.type.js";

export const sdk = new ChainEngineSdk(
  "https://api.chainengine.xyz",
  process.env.REACT_APP_API_KEY,
  process.env.REACT_APP_SECRET_KEY
);

export const gameId = "aa626681-f03a-4c8c-a7c8-294051743c53";
export const FetchTypeExport = FetchType
