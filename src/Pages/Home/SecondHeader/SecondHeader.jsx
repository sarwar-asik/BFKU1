import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'

const SecondHeader = () => {
  let time = new Date().toLocaleTimeString()
  const [ctime, setCtime] = useState(time)

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString()
    setCtime(time)
  }

  const { data: noticeBoardData } = useQuery({
    queryKey: ['noticeBoard'],
    queryFn: async () => {
      const res = await fetch(
        'https://project-khulna-backend-thebrightfuture.vercel.app/notice',
      )
      const data = await res.json()
      return data.data
    },
  })

  const noticeBoard = (noticeBoardData ?? [])[0]

  setInterval(UpdateTime, 1000)

  return (
    <div className="flex justify-center ml-3 mr-3">
      <div className="border-solid border-2 rounded mt-4 border-[#133654] bg-[#132736] h-10 w-full">
        <marquee className="text-white pt-1">
          {noticeBoard?.noticeBoard}
        </marquee>
      </div>
      <div className="p-1 border-solid border-2 rounded mt-4 ml-2 border-[#133654] h-10 text-white bg-[#132736]">
        <p className="flex items-center w-max">
          <AiOutlineClockCircle className="mt-1 mr-1 w-min" />
          {ctime}
        </p>
      </div>
    </div>
  )
}
export default SecondHeader
