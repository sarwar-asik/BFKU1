import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { AuthContext } from '../../../../Context/UserContext'

const AllWidrow = () => {
  const { user } = useContext(AuthContext)
  const { data: allWithdrow = [], isLoading } = useQuery({
    queryKey: ['withdraw'],
    queryFn: () =>
      fetch(
        `https://project-khulna-backend-thebrightfuture.vercel.app/withdraw/${user.userID}`,
      ).then((res) => res.json()),
  })
  console.log(allWithdrow)
  return (
    <div className="md:w-[80%] w-[97%] mx-auto mt-4">
      <h1 className="font-bold text-lg">All Withdraw</h1>
      {/* display statement */}
      <div className="overflow-x-auto">
        <table className="table table-compact w-full mt-4">
          <thead>
            <tr className="">
              <th className="bg-[#169e8c] text-white">From</th>
              <th className="bg-[#169e8c] text-white">Amount</th>
              <th className="bg-[#169e8c] text-white">Through</th>
              <th className="bg-[#169e8c] text-white">Club</th>
              <th className="bg-[#169e8c] text-white">Time</th>
              <th className="bg-[#169e8c] text-white">Date</th>
              <th className="bg-[#169e8c] text-white">method</th>
              <th className="bg-[#169e8c] text-white">Account</th>
              <th className="bg-[#169e8c] text-white">Status</th>
              <th className="bg-[#169e8c] text-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {allWithdrow.map((allDeposit) => (
              <tr className="border-t border-gray-400">
                <td className="bg-gray-600 text-white">{allDeposit.number}</td>
                <td className="bg-gray-600 text-white">{allDeposit.amount}</td>
                <td className="bg-gray-600 text-white">{allDeposit.name}</td>
                <td className="bg-gray-600 text-white">{allDeposit.club}</td>
                <td className="bg-gray-600 text-white">{allDeposit.time}</td>
                <td className="bg-gray-600 text-white">{allDeposit.Date}</td>
                <td className="bg-gray-600 text-white">{allDeposit.method}</td>
                <td className="bg-gray-600 text-white">{allDeposit.account}</td>
                <td className="bg-gray-600 text-white">
                  {allDeposit.status ? <p>Panding</p> : <p>Sucess</p>}
                </td>
                <td className="bg-gray-600 text-white">
                  <button>Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllWidrow
