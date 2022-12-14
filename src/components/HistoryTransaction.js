import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const History = ({data}) => {
  const [historyData, setHistoryData] = useState([])

  useEffect(() => {
    console.log(data, "bentuk data sekarang")
    const result = data.filter(function( element ) {
        return element !== undefined;
    });
    console.log(result, "data yang udah di filter")
    setHistoryData(result)
  }, [data])

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-200">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    NO
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    txHash
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Contract Address
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {historyData?.map((transaction, idx) => (
                  <tr>
                    <td className="pl-4 pr-0 py-4 text-sm font-medium text-gray-800">
                      {idx + 1}
                    </td>
                    <td className="pl-4 pr-0 py-4 text-sm font-medium text-gray-800">
                      <Link 
                        target="_blank"
                        rel="noreferrer" 
                        to={`//mumbai.polygonscan.com/tx/${transaction?.transactionHash}`}
                        >
                          {transaction?.transactionHash}
                      </Link>
                    </td>
                    <td className="px-0 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {transaction?.contractAddress}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
