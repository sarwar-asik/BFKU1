import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../../Context/UserContext'
import AllSponsorTable from './AllSponsorTable'

const Allsponsor = () => {
  const { user } = useContext(AuthContext)
  const [allSponsor, setAllSponsor] = useState([])

  const allSponsors = () => {
    const userID = user.userID
    fetch(
      `https://project-khulna-backend-thebrightfuture.vercel.app/sponsor/${userID}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setAllSponsor(data)
      })
  }
  allSponsors()
  return (
    <div className="w-full m-auto">
      <div className=" w-10/12 m-auto">
        <h3 className="font-semibold text-xl mt-5 mb-3">All sponsor</h3>
        <div>
          {allSponsor.length > 0 ? (
            <table className="w-full">
              <thead className=" border-stone-200">
                <tr className="bg-teal-600 text-white">
                  <th className="p-2 text-center text-sm font-semibold">
                    Name
                  </th>
                  <th className="p-2 text-center text-sm font-semibold">
                    User
                  </th>
                  <th className="p-2 text-center text-sm font-semibold">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody>
                {allSponsor.map((singleSponsor, i) => {
                  return (
                    <AllSponsorTable key={i} singleSponsor={singleSponsor} />
                  )
                })}
              </tbody>
            </table>
          ) : (
            <h1 className="text-5xl py-24">No sponsor found</h1>
          )}
        </div>
      </div>
    </div>
  )
}

export default Allsponsor
