import React, { Fragment, useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory, Link } from "react-router-dom";
import { sdk} from "../services";

import LoadingOverlay from "react-loading-overlay";

export const players = [
  {
    name: "Player 1",
    id: "0b80f768-77ee-46bf-8ea7-386b15533bcd",
    walletAddress: "0xAd3E55E740C59951F433Bc7127319E0772b36b18"
  },
  {
    name: "Player 2",
    id: "327a6728-c42a-4b2d-8fac-5ffab06566c3",
    walletAddress: "0x2Aae54DdA49935fF06C233ffC23FDEbd10D4E3C2"
  },
  {
    name: "Player 3",
    id: "5d61f99c-b926-437d-b118-9104744a3f6c",
    walletAddress: "0x394d39436a01F140Bc28FEA0738080493DEAC690"
  },
  {
    name: "Player 4",
    id: "90b1ab6c-7297-473d-9529-ac4f66cecb8a",
    walletAddress: "0x32c45d580DE0F6126941bfb8ff2181e778545E85"
  },
  {
    name: "Player 5",
    id: "bfb11de3-5e5e-440e-affc-56f14e8a1b45",
    walletAddress: "0x03aefFc2a553E7A375e8B4Ca581494aB49bE0eF6"
  }
];

export const TransferNFT = (route) => {
  const {playersData} = useContext(GlobalContext)
  const [isClicked, setIsClicked] = useState(true)
  const [amount, setAmount] = useState();
  let history = useHistory();
  const { items, transferNFT } = useContext(GlobalContext);
  const [selectedItem, setSelectedItem] = useState({
    id: null,
    name: "",
    image: ""
  });
  const currentItemId = route.match.params.id;
  // console.log(currentItemId, "dari transferpage");

  //Players Feature
  const [selected, setSelected] = useState(players.value);
  const [overlayActive, setOverlayActive] = useState(false)

  const handleChange = (event) => {
    // console.log(event.target.value, "data selected player");
    setSelected(event.target.value);
  };
  // async function getPlayersFromBlockchain() {
  //   try {
  //     const data = await sdk.nfts.getNFTsByParams({
  //       queryBy: FetchType.Player,
  //       id: gameId,
  //       page: 1,
  //       limit: 10
  //     });
  //     setPlayers(data);
  //     console.log(data, "from useEffect");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // console.log(players, "ini players");

  useEffect(() => {
    // get();
    // getPlayersFromBlockchain();
    const itemId = currentItemId;
    const selectedItem = items[0].find((emp) => emp.id === itemId);
    // console.log(selectedItem, "dari useeffect");
    setSelectedItem(selectedItem);
    // eslint-disable-next-line
  }, [selectedItem]);

  const onSubmit = async (e) => {
    const datas = "error"
    e.preventDefault();
    // editEmployee(selectedUser);
    if(selectedItem.supplyAvailable > 0){
      setOverlayActive(true)
      const data = await sdk.nfts.transfer(
        { playerId: selected, amount: amount },
        selectedItem.id
      ); 
      if(data.status === "OK"){
        transferNFT(data);
        // alert(`Transaction success, click OK`)
        setOverlayActive(false)
      } else {
        transferNFT(datas)
        setOverlayActive(false)
        alert(`Transaction not success, Wrong input ${selected}, click OK for next`)
      }
    } else {
      alert(`Don't have enough amount to transfer for this item ${selectedItem.metadata.name}`)
    }
    history.push("/");
  };

  if (!selectedItem || !selectedItem.id) {
    return <div>sdf</div>;
  }

  return (
    <Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <LoadingOverlay 
          styles={{
            wrapper: {
              width: 'auto',
              height: 'auto',
            },
          }}
          active={overlayActive} 
          spinner 
          text='Wait a moment, transaction processing...'
        >
          <form onSubmit={onSubmit}>
            <div className="w-full mb-5">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Name of item is {selectedItem.metadata.name}
              </label>
              <div>
                <img className="w-full h-full object-cover" alt="this is the NFT card" src={selectedItem.metadata.image} />
              </div>
              <div class="relative mt-5">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  value={selected}
                  onChange={handleChange}
                  required
                >
                  <option>Select Player</option>
                  {playersData.map((option, key) => (
                    <option key={key} value={option.value}>
                      {option.id}
                    </option>
                  ))}
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <input
                className="shadow mt-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="text"
                placeholder={`Input amount, Available amount is ${selectedItem.supplyAvailable}`}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              {isClicked ? (
                <button onClick={() => setIsClicked(false)} className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
                  Transfer to Player
                </button>
              ) : (
                <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
                  Please wait, Processing...
                </button>
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
