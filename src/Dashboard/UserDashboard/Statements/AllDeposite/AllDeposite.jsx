import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../../../Context/UserContext'

const AllDeposite = () => {
  const { user } = useContext(AuthContext)
  const { data: allDeposits = [], isLoading } = useQuery({
    queryKey: ['allSponsor'],
    queryFn: () =>
      fetch(
        `https://project-khulna-backend-thebrightfuture.vercel.app/deposite/${user.userID}`,
      ).then((res) => res.json()),
  })
  return (
    <div className="md:w-[80%] w-[97%] mx-auto mt-4">
      <h1 className="font-bold text-lg">All Deposit</h1>
      {/* display statement */}
      <div className="overflow-x-auto">
        <table className="table table-compact w-full mt-4">
          <thead>
            <tr className="">
              <th className="bg-[#169e8c] text-white">To</th>
              <th className="bg-[#169e8c] text-white">From</th>
              <th className="bg-[#169e8c] text-white">Amount</th>
              <th className="bg-[#169e8c] text-white">TrXID</th>
              <th className="bg-[#169e8c] text-white">Through</th>
              <th className="bg-[#169e8c] text-white">Club</th>
              <th className="bg-[#169e8c] text-white">Time</th>
              <th className="bg-[#169e8c] text-white">Date</th>
              <th className="bg-[#169e8c] text-white">Method</th>
            </tr>
          </thead>
          <tbody>
            {allDeposits.map((allDeposit) => (
              <tr className="border-t border-gray-400">
                <td className="bg-gray-600 text-white">{allDeposit.number}</td>
                <td className="bg-gray-600 text-white">{allDeposit.from}</td>
                <td className="bg-gray-600 text-white">{allDeposit.amount}</td>
                <td className="bg-gray-600 text-white">
                  {allDeposit.transitionID}
                </td>
                <td className="bg-gray-600 text-white">{allDeposit.name}</td>
                <td className="bg-gray-600 text-white">{allDeposit.club}</td>
                <td className="bg-gray-600 text-white">{allDeposit.time}</td>
                <td className="bg-gray-600 text-white">{allDeposit.Date}</td>
                <td className="bg-gray-600 text-white">{allDeposit.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllDeposite
