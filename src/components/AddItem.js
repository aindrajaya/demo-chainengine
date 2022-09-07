import React, { Fragment, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {sdk, gameId} from '../services/index'


export const AddItem = () => {
  const [name, setName] = useState("");
  const [imageURI, setImageURI] = useState("");
  const [description, setDescription] = useState("");
  const [supply, setSupply] = useState("");
  const [model, setModel] = useState("");
  const [material, setMaterial] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const { addItem } = useContext(GlobalContext);
  let history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await sdk.nfts.mintToGame(
      {
        name: name,
        description: description,
        imageURI: imageURI,
        attributes: {
          weight: "1kg",
          color: "blue",
          material: material || null,
          manufacturer: manufacturer || null,
          model: model || null
        },
        supply: supply
      },
      gameId
    );
    addItem(data);
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
              Name of Items (NFTs)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter item name"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="location"
            >
              Image URI
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={imageURI}
              onChange={(e) => setImageURI(e.target.value)}
              type="text"
              placeholder="Enter Image URI"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              placeholder="Enter description"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="supply"
            >
              Supply
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={supply || null}
              onChange={(e) => setSupply(e.target.value)}
              type="text"
              placeholder="Enter Supply Items"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="supply"
            >
              Model (Attributes)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={model || null}
              onChange={(e) => setModel(e.target.value)}
              type="text"
              placeholder="Enter Model Items"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="supply"
            >
              Material (Attributes)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={material || null}
              onChange={(e) => setMaterial(e.target.value)}
              type="text"
              placeholder="Enter type material Items"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="supply"
            >
              Manufacturer (Attributes)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}
              type="text"
              placeholder="Enter Manufacturer of Items"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add Items NFT
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
