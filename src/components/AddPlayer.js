import React, { Fragment, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { sdk, gameId } from "../services";

export const AddPlayer = () => {
  const [address, setAddress] = useState("");
  const { addPlayer } = useContext(GlobalContext);
  let history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await sdk.players.create({
      gameId: gameId,
      walletAddress: address
    });
    addPlayer(data);
    history.push("/");
  };

  return (
    <Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Add Wallet Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add Items
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
