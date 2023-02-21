import { PencilSquareIcon } from '@heroicons/react/24/solid'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

const TotalSponsor = () => {
  const { data: allSponsor = [], isLoading, refetch } = useQuery({
    queryKey: ['allSponsor'],
    queryFn: () =>
      fetch(
        'https://project-khulna-backend-thebrightfuture.vercel.app/allSponsor',
      ).then((res) => res.json()),
  })

  const [search, setSearch] = useState('')
  const [edit, setEdit] = useState(false)
  const [Percentage, setParsentage] = useState('')
  const [save, setSave] = useState(false)
  const [userParsentage, setUserParsentage] = useState('')

  const userOnePercentage = (userID) => {
    setSave(false)
    // const userID =sponsor.user.userID
    fetch(
      `https://project-khulna-backend-thebrightfuture.vercel.app/allUser/percentage/${userID}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },

        body: JSON.stringify({ userParsentage }),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        refetch()
        console.log(data)
        setParsentage(!edit)
      })
    console.log('parsenatge', userParsentage)
  }

  // console.log((Percentage))

  console.log(userParsentage)

  console.log(edit)

  const userPercentage = () => {
    setEdit(false)
    const setPercentage = Percentage
    fetch(
      'https://project-khulna-backend-thebrightfuture.vercel.app/allUser/percentage',
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },

        body: JSON.stringify({ setPercentage }),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        refetch()
        console.log(data)
        setParsentage(false)
      })
  }
  return (
    <div className="container  md:w-[80%] w-[96%] mx-auto py-2 capitalize">
      {/* header sm */}
      <header className="lg:flex justify-between">
        <h4 className="text-[22px] mt-3 font-[700] ">Total sponsor</h4>
        <input
          type="text"
          onChange={(event) => setSearch(event.target.value)}
          className="h-[37px] rounded-md text-white font-semibold p-4 bg-[#272b33] outline-none my-3"
          placeholder="Search userID"
        />
      </header>
      <hr className="w-full mt-2 border-[2px]  border-slate-600" />
      {/* total user table */}
      <div className="overflow-x-auto">
        <div className="flex justify-between items-center">
          <div>
            {edit ? (
              <input
                type="text"
                onChange={(e) => setParsentage(e.target.value)}
                className="bg-[#25314786] border border-blue-600 px-2 focus:border-blue-500 focus:outline-none w-[150px] rounded-md"
              />
            ) : (
              <span></span>
            )}
          </div>
          <div>
            {edit ? (
              <button
                onClick={userPercentage}
                className="px-3 py-2 rounded-md flex items-center text-white bg-[#233f56] ml-auto mt-2"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setEdit(!edit)}
                className="px-3 py-2 rounded-md flex items-center text-white bg-[#233f56] ml-auto mt-2"
              >
                <PencilSquareIcon className="w-5 mr-2"></PencilSquareIcon>Edit
              </button>
            )}
          </div>
        </div>
        <table className="table table-compact w-full mt-5">
          <thead>
            <tr className="text-white">
              <th className="bg-[#343946] py-3">sponsor ID</th>
              <th className="bg-[#343946] py-3">sponsor name</th>
              <th className="bg-[#343946] py-3">sponsor phone</th>
              <th className="bg-[#343946] py-3">affiliated</th>
              <th className="bg-[#343946] py-3">percentage</th>
              <th className="bg-[#343946] rounded-tr-md py-3">action</th>
            </tr>
          </thead>
          <tbody>
            {allSponsor
              .filter((item) => {
                return search.toLocaleLowerCase() === ''
                  ? item.user
                  : item.user.userID.toLocaleLowerCase().includes(search)
              })
              .map((sponsor, i) => (
                <tr key={i} className="border-b border-[#8080805f]">
                  <td className="bg-[#282936] text-[#A8A9AE] py-3 rounded-none border-b border-[#8080805f]">
                    {sponsor.user.userID}
                  </td>
                  <td className="bg-[#282936] text-[#A8A9AE] py-3 rounded-none border-b border-[#8080805f]">
                    {sponsor.user.name}
                  </td>
                  <td className="bg-[#282936] text-[#A8A9AE] py-3 rounded-none border-b border-[#8080805f]">
                    {sponsor.user.phone}
                  </td>
                  <td className="bg-[rgb(40,41,54)] text-[gold] py-3 rounded-none border-b border-[#8080805f]">
                    {sponsor.sponsors.length}
                  </td>
                  <td className="bg-[#282936] text-[#A8A9AE] py-3 rounded-none border-b border-[#8080805f]">
                    {save ? (
                      <input
                        type="text"
                        onChange={(e) =>
                          setUserParsentage(e.target.value.toLocaleLowerCase)
                        }
                        defaultValue={sponsor.user.percentage}
                        className="bg-[#25314786] border border-blue-600 px-2 focus:border-blue-500 focus:outline-none w-[50px] rounded-md"
                      />
                    ) : (
                      <p>{sponsor.user.percentage}%</p>
                    )}
                  </td>
                  <td className="bg-[#282936] text-[#A8A9AE] py-3 rounded-none border-b border-[#8080805f] flex items-center">
                    {save ? (
                      <button
                        onClick={() => userOnePercentage(sponsor.user.userID)}
                        className="px-3 py-2 rounded-md text-white bg-[#4663f5] flex items-center"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => setSave(true)}
                        className="px-3 py-2 rounded-md text-white bg-[#4663f5] flex items-center"
                      >
                        Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TotalSponsor
