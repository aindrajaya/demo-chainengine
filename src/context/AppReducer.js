/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  switch (action.type) {
    case "REMOVE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        )
      };
    case "ADD_PLAYER":
      return {
        ...state,
        playersData: [...state.playersData, action.payload]
      };
    case "GET_ALL_ITEMS":
      return {
        ...state,
        items: [action.payload]
      };
    case "ADD_ITEMS":
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case "TRANSFER_NFT":
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      };
    default:
      return state;
  }
};
