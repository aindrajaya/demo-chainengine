import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Card = ({ data, action }) => {
  return (
    <Fragment>
      {data[0].map((item) => (
        <div key={item?.id} className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <Link to="#">
              <img className="w-full h-48 object-contain" src={item?.metadata?.image} alt="" />
          </Link>
          <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item?.metadata?.name}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item?.metadata?.description}</p>
              <p className="text-gray-600 mb-2">
                 Supply Items: {item?.supplyAvailable}
               </p>
              <Link to={`/transfer/${item?.id}`} class="inline-flex items-center py-2 px-3 text-sm text-center text-white bg-green-400 rounded-lg hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-200 dark:bg-green-300 dark:hover:bg-green-400 dark:focus:ring-green-500 font-bold">
                  <span className="mx-2" onClick={() => action(item?.id)}>
                    Transfer NFT
                  </span>
                  {/* <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-repeat"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
              </Link>
          </div>
        </div>
        // <div className="flex justify-center" key={item?.id}>
        //   <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        //     <img
        //       className="rounded-t-lg md:rounded-none object-cover"
        //       src={item?.metadata?.image}
        //       alt=""
        //     />
        //     <div className="p-6 flex flex-col justify-start">
        //       <h5 className="text-gray-900 text-xl font-medium mb-2">
        //         {item?.metadata?.name}
        //       </h5>
        //       <p className="text-gray-700 text-base mb-4">
        //         {item?.metadata?.description}
        //       </p>
        //       <p className="text-gray-600">
        //         Supply Items: {item?.supplyAvailable}
        //       </p>
        //       <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
        //       <div className="flex-auto text-center px-4 md:px-2 py-2 md:py-1 m-2">
        //         <Link to={`/transfer/${item?.id}`}>
        //           <button
        //             title="Transfer NFT Items"
        //             onClick={() => action(item?.id)}
        //             className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold mr-3 py-2 px-4 rounded-full inline-flex items-center w-24"
        //           >
        //             <span className="px-4 text-center">Transfer NFT</span>
        //             <svg
        //               xmlns="http://www.w3.org/2000/svg"
        //               width="10"
        //               height="10"
        //               viewBox="0 0 24 24"
        //               fill="none"
        //               stroke="currentColor"
        //               strokeWidth="2"
        //               strokeLinecap="round"
        //               strokeLinejoin="round"
        //               className="feather feather-repeat"
        //             >
        //               <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        //               <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        //             </svg>
        //           </button>
        //         </Link>
        //       </div>
        //     </div>
        //   </div>
        // </div>
      ))}
    </Fragment>
  );
};

export default Card;
