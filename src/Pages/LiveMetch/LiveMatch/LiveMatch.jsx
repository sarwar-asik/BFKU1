import React, { useEffect, useState } from 'react'
import LiveMatchCart from '../LiveMatchCart/LiveMatchCart'

const LiveMatch = () => {
  const [adminMatchControl, setAdminMatchControl] = useState([])
  useEffect(() => {
    fetch(
      'https://project-khulna-backend-thebrightfuture.vercel.app/livematchData',
    )
      .then((res) => res.json())
      .then((data) => setAdminMatchControl(data))
  }, [])

  // const LiveMatchControlData = adminMatchControl.map((mData) => {
  //   const liveMatchControl = mData.postBatedata.filter(
  //     (flData) => flData.matchStatus === "Live"
  //   );
  //   return liveMatchControl;
  // });
  // console.log(LiveMatchControlData);

  return (
    <div className="">
      {/* live match section */}
      <div className="">
        {/* match title */}
        <div className="live-match bg-[#232F41] px-[14px] py-[17px] rounded flex items-center justify-between">
          <h1 className="text-[#29cfcf] text-[19px] font-[600]">Live Match</h1>{' '}
          <div className="flex relative">
            {' '}
            <h1 className="text-[#CF0B0B] text-[19px] font-bold relative after:absolute w-[20px mr-4">
              Live
            </h1>
            <sup className="bg-[#CF0B0B] w-[9px] h-[9px] rounded-full absolute right-0 top-[2px]"></sup>
          </div>
        </div>
        {adminMatchControl.map((liveMatchData, index) => (
          <LiveMatchCart
            key={index * 9}
            liveMatchData={liveMatchData}
          ></LiveMatchCart>
        ))}
      </div>
    </div>
  )
}

export default LiveMatch
