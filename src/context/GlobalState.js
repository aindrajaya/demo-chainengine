import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  datas: [
    {
      id: "83d7ca92-8bc8-4d2e-9668-a11a684a1553",
      contractAddress: "0x4978fdb799010d73E1d57530666B4c66A16D1854",
      onChainId: "28",
      chain: "mumbai",
      transactionHash:
        "0x3143f844d5ce6fcc34a20baf7f3498d6fbf853bfd85e8be9b564318ed5b07c1b",
      accountId: "015eeff0-0133-4fb9-9a44-dcc832d96c3d",
      gameId: "aa626681-f03a-4c8c-a7c8-294051743c53",
      status: "ONCHAIN",
      metadata: {
        name: "Hammer from ID v5",
        description: "Hammer v.7",
        image:
          "http://api.chainengine.xyz/nfts/83d7ca92-8bc8-4d2e-9668-a11a684a1553/image",
        attributes: [Object],
        URI: "ipfs://QmVeqYmzmDAtMsLpNipTfRwgchAFc8DFeQrkS5eiWwgXKf"
      },
      supply: 10,
      supplyAvailable: 10,
      createdAt: "2022-09-06T13:39:03.372Z"
    }
  ],
  transactions: [],
  datasAgain: [
    {
      id: "5b52a2e2-6ffa-4edf-9d99-23fe8fabf72d",
      contractAddress: "0x02562366454b90b21E4D291fCE28b9a208D2D662",
      onChainId: "5",
      chain: "polygon",
      transactionHash:
        "0x8547e466ac93e34df02643b28a11daabe4c46a5e9ceb095aa1e13a70534fbe35",
      accountId: "test2",
      gameId: "26716535-bb9a-4ad4-afb1-4effa5a7830b",
      status: "ONCHAIN",
      metadata: {
        name: "Hammer",
        description: "Hammer v.1",
        image:
          "https://62acd7e8d87dbc18617c656a--moonlit-sundae-d1789e.netlify.app/NFTs/hammer_00.jpg",
        attributes: {
          weight: "10kg",
          color: "red",
          material: "steel",
          manufacturer: "Hammer Manufacturer",
          model: "Hammer Model"
        },
        URI: "ipfs://QmUxJdroj17EXNceFGtzL4gxwM8uU18x6dQ3hyA58oBk2A"
      },
      holders: {
        "f406fb49-832f-4fe1-8df6-2f93ba5544c1": 3
      },
      supply: 10,
      supplyAvailable: 7
    }
  ],
  player: {
    id: "bfb11de3-5e5e-440e-affc-56f14e8a1b45",
    gameId: "aa626681-f03a-4c8c-a7c8-294051743c53",
    walletAddress: "0x03aefFc2a553E7A375e8B4Ca581494aB49bE0eF6"
  },
  items: []
};

// console.log(initialState.items, "dari global state");

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function getAllItems(res) {
    dispatch({
      type: "GET_ALL_ITEMS",
      payload: res.data.items[0].nfts
    });
  }

  function addPlayer(player) {
    dispatch({
      type: "ADD_PLAYER",
      payload: player.data.player
    });
  }

  function removeEmployee(no_id) {
    dispatch({
      type: "REMOVE_EMPLOYEE",
      payload: no_id
    });
  }

  function addItem(items) {
    dispatch({
      type: "ADD_ITEMS",
      payload: items.data
    });
  }

  function transferNFT(transactions) {
    // console.log(transactions.data, "ini dari global state");
    dispatch({
      type: "TRANSFER_NFT",
      payload: transactions.data
    });
  }

  function editEmployee(employees) {
    dispatch({
      type: "EDIT_EMPLOYEE",
      payload: employees
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        player: state.player,
        items: state.items,
        transactions: state.transactions,
        getAllItems,
        removeEmployee,
        addItem,
        editEmployee,
        addPlayer,
        transferNFT
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
