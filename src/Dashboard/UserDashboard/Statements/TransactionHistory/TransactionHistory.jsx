import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { AuthContext } from '../../../../Context/UserContext'

const TransactionHistory = () => {
  const { user } = useContext(AuthContext)
  const { data: allTransaction = [], isLoading } = useQuery({
    queryKey: ['allTransaction'],
    queryFn: () =>
      fetch(
        `https://project-khulna-backend-thebrightfuture.vercel.app/allTransaction/${user.userID}`,
      ).then((res) => res.json()),
  })
  console.log(allTransaction)
  return (
    <div className="md:w-[80%] w-[97%] mx-auto mt-4">
      <h1 className="font-bold text-lg">Transaction History</h1>
      {/* display statement */}
      <div className="overflow-x-auto">
        <table className="table table-compact w-full mt-4">
          <thead>
            <tr className="">
              <th className="bg-[#169e8c] text-white">Ac No</th>
              <th className="bg-[#169e8c] text-white">Amount</th>
              <th className="bg-[#169e8c] text-white">Through</th>
              <th className="bg-[#169e8c] text-white">time</th>
              <th className="bg-[#169e8c] text-white">Date</th>
              <th className="bg-[#169e8c] text-white">Method</th>
              <th className="bg-[#169e8c] text-white">Ac Status</th>
            </tr>
          </thead>
          <tbody>
            {allTransaction.map((transaction) => (
              <tr className="border-t border-gray-400">
                <td className="bg-gray-600 text-white">{transaction.number}</td>
                <td className="bg-gray-600 text-white">{transaction.amount}</td>
                <td className="bg-gray-600 text-white">{transaction.name}</td>
                <td className="bg-gray-600 text-white">{transaction.time}</td>
                <td className="bg-gray-600 text-white">{transaction.Date}</td>
                <td className="bg-gray-600 text-white">{transaction.method}</td>
                <td className="bg-gray-600 text-white">
                  {transaction.account}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TransactionHistory
