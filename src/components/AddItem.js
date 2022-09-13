import React, { Fragment, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {sdk, gameId} from '../services/index'
import LoadingOverlay from "react-loading-overlay";


export const AddItem = () => {
  const [isClicked, setIsClicked] = useState(true)
  const [name, setName] = useState("");
  const [imageURI, setImageURI] = useState("");
  const [description, setDescription] = useState("");
  const [supply, setSupply] = useState("");
  const [model, setModel] = useState("");
  const [material, setMaterial] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [overlayActive, setOverlayActive] = useState(false)
  const { addItem } = useContext(GlobalContext);
  let history = useHistory();
  const imageDefault = "https://png.pngtree.com/png-vector/20190330/ourmid/pngtree-vector-weapons-icon-png-image_892572.jpg"

  const onSubmit = async (e) => {
    e.preventDefault();
    if(supply > 0){
      setOverlayActive(true)
      const data = await sdk.nfts.mintToGame(
        {
          name: name,
          description: description,
          imageURI: imageURI || imageDefault,
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
      if(data.status === "OK"){
        addItem(data);
        setOverlayActive(false)
      }
    } else {
      alert(`Your items supply must be more than 0`)
    }
    history.push("/");
  };

  // const changed = setIsClicked(false)

  return (
    <Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
      <LoadingOverlay 
        styles={{
          wrapper: {
              width: '100%',
              height: '100%',
            }
          }} 
        active={overlayActive} 
        spinner 
        text='Wait a moment, processing...'
        >
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
                required
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
                required
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
                required
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
                required
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
              {isClicked ? (
                <button onClick={() => setIsClicked(false)} className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Add Items NFT
                </button>
              ):(
                <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  {/* <svg className="h-4 w-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg> */}
                  <span className="font-small">Please wait, Processing......</span>
                </button>
                // <button type="button" className="rounded-lg bg-green-700 px-4 py-2 text-white" disabled>
                //   <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                //     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                //     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                //   </svg>
                //   <span class="font-medium"> Processing... </span>
                // </button>
              )}
              
            </div>
            <div className="text-center mt-4 text-gray-500">
              <Link to="/">Cancel</Link>
            </div>
          </form>
        </LoadingOverlay>
      </div>
    </Fragment>
  );
};
