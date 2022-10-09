import React, { useState } from 'react'
import {sdk} from "../services";
import { useHistory, Link } from "react-router-dom";

export default function CreateListing() {
  const history = useHistory()
  const [listingSuccess, setListingSuccess] = useState()
  const [nftid, setnftid] = useState(null)
  // const idNFT = '333fa25f-3a88-478b-9fa6-726e6502e508';
  const userwallet = '0x03aefFc2a553E7A375e8B4Ca581494aB49bE0eF6';

  const listingResponse = async (id=nftid, wallet=userwallet) => {
    await sdk.marketplace.listings.create({
      "nftId": id,
      "amount": 1,
      "price": 0.0001,
      "receiptWallet": wallet
    }).then((res) => {
      setListingSuccess(res)
    }).catch((e) => {
      alert(e)
    })
    // history.push("/")
  }

  console.log(listingSuccess, "data terlisting");
  return (
    <div className="w-full max-w-sm container mt-20 mx-auto">
      <h2 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">NFT that will be send: <span className='uppercase text-green-400'>{nftid}</span></h2>
      <h2 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">User wallet: {userwallet}</h2>
      <div className="w-full mb-5">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="name"
        >
          ID of NFTs
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
          value={nftid}
          onChange={(e) => setnftid(e.target.value)}
          type="text"
          placeholder="Enter ID NFT"
          required
        />
      </div>
      <button onClick={() => listingResponse()} className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Button Listing</button>
      <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        <Link to="/">Back to Main</Link>  
      </button>
      <h1 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">{listingSuccess?.status}</h1>
      {listingSuccess?.status === 'ERROR' ? <h1>
        {listingSuccess?.message}
      </h1> : null}
    </div>
  )
}


 



