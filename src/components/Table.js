import React from "react";

export default function Table({ data }) {
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
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Wallet Address
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.map((player, idx) => (
                  <tr>
                    <td className="pl-4 pr-0 py-4 text-sm font-medium text-gray-800">
                      {idx + 1}
                    </td>
                    <td className="pl-4 pr-0 py-4 text-sm font-medium text-gray-800">
                      {player.id}
                    </td>
                    <td className="px-0 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {player.walletAddress}
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
}
