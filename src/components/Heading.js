import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import {sdk, gameId, FetchTypeExport } from "../services";
import Table from "./Table";
import { players } from "./TransferNFT";

// const sdk2 = require('api')('@chainengine/v1.0#9fkt3il69sxq8k')

export const Heading = () => {
   const {playersData} = useContext(GlobalContext)

  /**
   * Pick players from blockchain
   */
  // const [allPlayers, setAllPlayers] = useState()
  // async function getPlayersFromBlockchain() {
  //   try {
  //     const data = await sdk2.PlayerController_getPlayerByGameId({
  //       gameId: gameId,
  //       'x-api-secret': process.env.REACT_APP_SECRET_KEY,
  //       'x-api-key': process.env.REACT_APP_API_KEY
  //     })
  //     setAllPlayers(data);
  //     console.log(data, "from useEffect");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // console.log(allPlayers, "players data")
  // useEffect(() => {
  //   getPlayersFromBlockchain()
  // }, [])

  /**
   * Pick Player Function and show their NFTs
   */
  // const [playerId, setPlayer] = useState()
  // const response = await sdk.nfts.getNFTsByParams({
  //   queryBy: FetchTypeExport.Player,
  //   id: playerId,
  //   page: 1,
  //   limit: 10,
  // });

  /**
   * Create Game function
   */
  // const data = await sdk.players.create({
  //   gameId: gameId,
  //   walletAddress: '0x32c45d580DE0F6126941bfb8ff2181e778545E85',
  // });

  return (
    <div>
      <div className="flex items-center mt-24 mb-10">
        <div className="flex-grow text-left px-4 py-2 m-2">
          <h5 className="text-gray-900 font-bold text-xl">Game ID: <span className="text-gray-600">{gameId}</span></h5>
          {/* <h2 className="mt-5 uppercase font-medium leading-tight">Game list: </h2>
          <ul className="text-gray-600 font-thin text-sm">
            <li key={1}>Game 1</li>
            <li>Game 1</li>
            <li>Game 1</li>
          </ul> */}
        </div>
        {/* <div className="flex-grow text-right px-4 py-2 m-2">
          <Link to="/addGame">
            <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-plus-circle"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
              <span className="pl-2">Create Game</span>
            </button>
          </Link>
        </div> */}
      </div>
      <div className="flex-grow text-right px-4 py-2 m-2">
        <Link to="/addPlayer">
          <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-plus-circle"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            <span className="pl-2">Add Player</span>
          </button>
        </Link>
      </div>
      <h2 className="font-medium leading-tight text-2xl mt-0 mb-6 text-black-600">
        Player List (<span className="text-gray-600">ID and Wallet Address</span>):{" "}
      </h2>
      <div className="flex-w-full px-32 items-center mt-2 mb-10">
        {/* <Table data={players} pickPlayer={setPlayer}/> */}
        <Table data={playersData}/>
      </div>
      <div className="flex-grow text-right px-4 py-2 m-2">
        <Link to="/add">
          <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-plus-circle"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            <span className="pl-2">Add NFTs</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
