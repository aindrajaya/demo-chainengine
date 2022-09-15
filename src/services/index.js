import { ChainEngineSdk } from "chainengine-sdk";
import { FetchType } from "chainengine-sdk/dist/nft/fetch.type.js";

export const sdk = new ChainEngineSdk(
  "https://api.chainengine.xyz",
  process.env.REACT_APP_API_KEY,
  process.env.REACT_APP_SECRET_KEY
);

export const gameId = process.env.REACT_APP_GAME_ID;
export const FetchTypeExport = FetchType
