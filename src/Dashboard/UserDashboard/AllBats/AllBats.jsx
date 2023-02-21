import { useQuery } from '@tanstack/react-query'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../Context/UserContext'

const AllBats = () => {
  const { user } = useContext(AuthContext)

  console.log(user, '++++++++++++++++++++++++++++')

  // const { data: bateData = [], refetch } = useQuery({
  //   queryKey: ["bateDate"],
  //   queryFn: async () => {
  //     const res = await fetch(`https://project-khulna-backend-thebrightfuture.vercel.app/batings/${user?.userID}`);
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  // const [bateData, setBateData] = useState([]);

  // useEffect(() => {
  //   fetch(`https://project-khulna-backend-thebrightfuture.vercel.app/batings/${user?.userID}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setBateData(data);
  //     });
  // }, [user?.userID]);

  // console.log(bateData, "++++++++++++++++++++++++++++");
  return (
    <div className="md:w-[80%] w-[97%] mx-auto mt-4">
      <h1 className="font-bold text-lg">All Bate</h1>
      {/* display statement */}
      <div className="overflow-x-auto">
        <table className="table table-compact w-full mt-4">
          <thead>
            <tr className="">
              <th className="bg-[#169e8c] text-white">SN.</th>
              <td className="bg-[#169e8c] text-white">Match</td>
              <td className="bg-[#169e8c] text-white">Match Date</td>
              <td className="bg-[#169e8c] text-white">Team1</td>
              <td className="bg-[#169e8c] text-white">Team2</td>
              <td className="bg-[#169e8c] text-white">Bate Time</td>
              <td className="bg-[#169e8c] text-white">Price</td>
              <td className="bg-[#169e8c] text-white">Win Amount</td>
              <td className="bg-[#169e8c] text-white">Win / Los</td>
            </tr>
          </thead>
          <tbody>
            {bateData?.map((bate, i) => {
              const {
                _id,
                price,
                rating,
                possibility,
                bateTime,
                bateDate,
                matchTime,
                matchDate,
                team1,
                team2,
                userID,
                option,
                optionHeader,
                winStatus,
                name,
              } = bate

              return (
                <tr className="border-t border-gray-400">
                  <th className="bg-gray-600 text-white">{i + 1}</th>

                  <td className="bg-gray-600 text-white">{name} match</td>
                  <td className="bg-gray-600 text-white">{matchDate}</td>
                  <td className="bg-gray-600 text-white">{team1}</td>
                  <td className="bg-gray-600 text-white">{team2}</td>
                  <td className="bg-gray-600 text-white">
                    {bateTime},{bateDate}
                  </td>
                  <td className="bg-gray-600 text-white text-sm">{price}</td>
                  <td className="bg-gray-600 text-white">{possibility}</td>
                  <td className="bg-gray-600 text-white">
                    {winStatus === false && <span>pending</span>}
                    {winStatus === 'win' && <span>win</span>}
                    {winStatus === 'lost' && <span>lost</span>}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllBats
