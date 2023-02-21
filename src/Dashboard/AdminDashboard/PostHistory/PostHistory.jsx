import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
const PostHistory = () => {
  const { data: historyData = [], isLoading, refetch } = useQuery({
    queryKey: [' historyData'],
    queryFn: () =>
      fetch(
        `https://project-khulna-backend-thebrightfuture.vercel.app/postHistory`,
      ).then((res) => res.json()),
  })

  // console.log(historyData);

  const [uData, setUData] = useState([])

  useEffect(() => {
    const uData = historyData

    setUData(
      uData.map((d) => {
        return {
          select: false,
          _id: d._id,
          gameImg: d.gameImg,
          matchTime: d.matchTime,
          matchDate: d.matchDate,
          matchName: d.matchName,
          team1: d.team1,
          team2: d.team2,
          matchStatus: d.matchStatus,
        }
      }),
    )
  }, [historyData])

  const backControlar = (data) => {
    console.log('con', data)
    fetch(
      `https://project-khulna-backend-thebrightfuture.vercel.app/backControler`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    )
      .then((resp) => resp.json())
      .then((result) => {
        // console.log(result)
        refetch()
        if (result.acknowledged) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Cntroller`,
            showConfirmButton: false,
            timer: 1500,
          })
        }
      })
  }
  const deleteGame = (data) => {
    fetch(`https://project-khulna-backend-thebrightfuture.vercel.app/endGame`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((result) => {
        console.log(result)
        if (result.acknowledged) {
          refetch()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Cntroller`,
            showConfirmButton: false,
            timer: 1500,
          })
        }
      })
  }

  return (
    <div className="container  md:w-[80%] w-[96%] mx-auto py-2 capitalize">
      <div className="flex justify-between items-center border-b border-[#8080804b] pb-2">
        <h1 className="font-bold text-md text-white">Post History</h1>

        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text mr-2">Select all</span>
            <input
              className="checkbox checkbox-secondary"
              onChange={(e) => {
                let checked = e.target.checked
                setUData(
                  uData.map((d) => {
                    d.select = checked
                    return d
                  }),
                )
              }}
              type="checkbox"
            />
          </label>
        </div>
      </div>
      {/* total user table */}
      <div className="gr_id md:gr_id-cols-4 gr_id-cols-1 mt-5 gap-3">
        {uData.map((user) => (
          <div
            key={user._id}
            className="bg-[#232733] duration-300 hover:bg-[#1f2431] rounded-lg p-2"
          >
            <div className="form-control">
              <input
                className="checkbox checkbox-secondary"
                onChange={(e) => {
                  let checked = e.target.checked

                  setUData(
                    uData.map((data) => {
                      if (user._id === data._id) {
                        data.select = checked
                      }
                      return data
                    }),
                  )
                }}
                type="checkbox"
                checked={user.select}
              />
            </div>

            <img
              src={user.gameImg}
              className="rounded-full w-[100px] h-[100px] mx-auto border border-[#c11660] p-1"
              alt=""
            />

            <h1 className="font-[500] mt-2 text-lg text-white text-center">
              <span>{user.team1} </span>
              <span className="mx-2">VS</span>
              <span>{user.team2} </span>
            </h1>
            <p className="text-[15px] text-center font-[400]">
              {user.matchDate}
            </p>

            <p className="text-[15px] text-center font-[400]">
              {user.matchTime}
            </p>
            <p className="text-[15px] text-center font-[400]">
              {user.matchStatus} Match
            </p>

            <button
              onClick={() => backControlar(user)}
              className="flex justify-center bg-[#181825] w-full px-2 py-2 mt-3 duration-150 hover:bg-[#1b1b33] rounded-lg items-center "
            >
              Back to controller{' '}
              <ArrowRightIcon className="w-4 ml-2"></ArrowRightIcon>
            </button>

            <button
              onClick={() => deleteGame(user)}
              className="flex justify-center bg-[#6e042b] w-full px-2 py-2 mt-3 duration-150 hover:bg-[#5d0733] rounded-lg items-center "
            >
              End game{' '}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostHistory
