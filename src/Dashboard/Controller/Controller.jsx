import React from 'react'
import { useState } from 'react'
import OptionCart from '../OptionCart/OptionCart'
import UpCommingCart from '../UpCommingCart/UpCommingCart'
import { useQuery } from '@tanstack/react-query'

const Controller = () => {
  // const [adminMatchControl, setAdminMatchControl] = useState([]);

  const { isLoading, data: LiveMetchData, refetch } = useQuery({
    queryKey: ['LiveMetchData'],
    queryFn: () => {
      return fetch(
        'https://project-khulna-backend-thebrightfuture.vercel.app/livematchData',
      ).then((res) => res.json())
    },
  })

  const { data: upCommingData } = useQuery({
    queryKey: ['UpcommingData'],
    queryFn: () => {
      return fetch(
        'https://project-khulna-backend-thebrightfuture.vercel.app/UpcommingData',
      ).then((res) => res.json())
    },
  })
  refetch()

  if (isLoading) return <div>Loading...</div>

  return (
    <div className=" md:w-[80%] w-[93%] mx-auto mt-2 capitalize">
      <h2 className="pb-3 border-b border-[#80808067] text-bold">Controller</h2>
      <div className="grid md:grid-cols-2 grid-flow-cols-1 gap-4 mt-4">
        <div className="bg-[#20242E] px-3 py-4 rounded-[12px] overflow-hidden">
          <h1 className="text-white font-[500]">live match</h1>

          {LiveMetchData?.map((lmData, index) => (
            <OptionCart
              key={index * 11}
              lmData={lmData}
              LiveMetchData={LiveMetchData}
            ></OptionCart>
          ))}
        </div>
        <div className="bg-[#20242E] px-3 py-4 rounded-[12px] overflow-hidden">
          <h1 className="text-white font-[500]">Coming soon</h1>
          {upCommingData?.map((upData, index) => {
            return (
              <UpCommingCart key={index * 10} upData={upData}></UpCommingCart>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Controller
