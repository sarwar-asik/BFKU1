import React from 'react'
import LiveMatchCart from '../LiveMatchCart/LiveMatchCart'
import { useQuery } from '@tanstack/react-query'
import live from './img/live.gif'
const LiveMatch = () => {
  const { isLoading, data: LiveMetchData } = useQuery({
    queryKey: ['LiveMetchData'],
    queryFn: () => {
      return fetch(
        'https://project-khulna-backend-thebrightfuture.vercel.app/livematchData',
      ).then((res) => res.json())
    },
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="">
      {/* live match section */}
      <div className="">
        {/* match title */}
        <div className="live-match bg-[#192537] px-[14px] py-[17px] rounded flex items-center justify-between">
          <h1 className="text-[#23baba] text-[19px] font-[600]">Live Match</h1>{' '}
          <div className="flex relative">
            {' '}
            <h1 className="text-[#CF0B0B] text-[19px] font-bold relative after:absolute w-[20px mr-4">
              Live
            </h1>
            <img className="w-[30px] rounded-full" src={live} alt="" />
          </div>
        </div>

        {LiveMetchData.map((liveMatchDatas, index) => {
          console.log(liveMatchDatas._id, 'id')
          const { postBatedata } = liveMatchDatas
          // console.log(postBatedata, "++++++++++++++");
          return (
            <>
              {postBatedata.map((liveMatchData, index) => {
                // console.log("livema",liveMatchData);
                return (
                  <LiveMatchCart
                    mainId={liveMatchDatas._id}
                    key={index * 9}
                    liveMatchData={liveMatchData}
                  ></LiveMatchCart>
                )
              })}
            </>
          )
        })}
      </div>
    </div>
  )
}

export default LiveMatch
