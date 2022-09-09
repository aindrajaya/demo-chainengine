import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {sdk, gameId, FetchTypeExport } from "../services";
import Table from "./Table";
import { players } from "./TransferNFT";


export const Heading = () => {
  const [allPlayers, setAllPlayers] = useState()
  
  async function getPlayersFromBlockchain() {
    try {
      // const data = await sdk.nfts.getNFTsByParams({
      //   queryBy: FetchTypeExport.Game,
      //   id: gameId,
      //   page: 1,
      //   limit: 5
      // });
      // const data2 = await sdk.players.getByGameId({
      //   queryBy: FetchTypeExport.Player,
      //   id: gameId,
      //   page: 1,
      //   limit: 10
      // })
      
      const data = await sdk.PlayerController_getPlayerByGameId({
        gameId: gameId,
        'x-api-secret': process.env.REACT_APP_SECRET_KEY,
        'x-api-key': process.env.REACT_APP_API_KEY
      })
      setAllPlayers(data);
      console.log(data, "from useEffect");
    } catch (error) {
      console.error(error);
    }
  }

  console.log(allPlayers, "players data")

  useEffect(() => {
    getPlayersFromBlockchain()
  }, [])

  return (
    <div>
      <div className="flex items-center mt-24 mb-10">
        <div className="flex-grow text-left px-4 py-2 m-2">
          <h5 className="text-gray-900 font-bold text-xl">Game ID: {gameId}</h5>
        </div>
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
      <div className="flex-w-full px-32 items-center mt-2 mb-10">
        <Table data={players} />
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
