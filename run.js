// import { ChainEngineSdk } from "chainengine-sdk";
// import { FetchType } from "chainengine-sdk/dist/nft/fetch.type.js";
// import { createReadStream } from 'fs';
// import { ChainEngineSdk } from "chainengine-sdk";
// const ChainEngineSdk = require('chainengine-sdk')
const ChainEngineSdk = require('chainengine-sdk/dist/nft/fetch.type.js');
const fs = require('fs')

const sdk = new ChainEngineSdk(
  "https://api.chainengine.xyz",
  '947f05d7-3a1b-41bf-a015-0cc8572ec392',
  'f1318daa102bc1b7fd0de31ee8816339a9b06fdc028f01bc1cf36975b69daed1'
);

const fileReadStream = fs.createReadStream(`./images/shield.jpg`);
console.log(fileReadStream, "data Image")

const uploadResponse = async (file) => {
  await sdk.nfts.uploadFileToIFPS(file);
  // history.push("/")
}

console.log(uploadResponse(fileReadStream), "data upload sukses")