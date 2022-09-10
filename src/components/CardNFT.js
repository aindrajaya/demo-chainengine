import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Card = ({ data, action }) => {
  return (
    <Fragment>
      {data[0].map((item) => (
        <div className="flex justify-center" key={item?.id}>
          <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img
              className=" w-96 h-96 md:h-auto object-fill md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={item?.metadata?.image}
              alt=""
            />
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {item?.metadata?.name}
              </h5>
              <p className="text-gray-700 text-base mb-4">
                {item?.metadata?.description}
              </p>
              <p className="text-gray-600">
                Supply Items: {item?.supplyAvailable}
              </p>
              <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
              <div className="flex-auto text-center px-4 py-2 m-2">
                <Link to={`/transfer/${item?.id}`}>
                  <button
                    title="Transfer NFT Items"
                    onClick={() => action(item?.id)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold mr-3 py-2 px-4 rounded-full inline-flex items-center"
                  >
                    <span className="px-4">Transfer NFT</span>
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
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default Card;
