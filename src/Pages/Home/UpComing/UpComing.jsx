import React from 'react'
import CommonModal from '../../CommonModal/CommonModal'
import '../HomeStyle/HomeStyle.css'
import { useQuery } from '@tanstack/react-query'

const Upcoming = () => {
  const { isLoading, data: upCommingData } = useQuery({
    queryKey: ['UpcommingData'],
    queryFn: () => {
      return fetch(
        'https://project-khulna-backend-thebrightfuture.vercel.app/UpcommingData',
      ).then((res) => res.json())
    },
  })

  console.log(upCommingData)

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="container mx-auto ">
      <h1 className="live-match bg-[#192537] px-[14px] py-[16px] text-[#23baba] pl-[14px] rounded-[4px] text-[19px] font-[600]">
        Coming Soon ....
      </h1>
      <div className="flex flex-col  gap-[18px] py-[16px] rounded">
        {upCommingData.map((upcData, index) => {
          const { postBatedata } = upcData

          return (
            <>
              {postBatedata.map((upcData, index) => {
                return (
                  <div className="w-full ">
                    <div className="match-header flex items-center gap-3 w-full">
                      <div
                        key={index * 61}
                        className="collapse text-black font-[500] mt-0 bg-[#192537] rounded-[10px] p-[14px] w-full"
                      >
                        <input type="checkbox" className="p-0 m-0 gap-0" />
                        {/* top section */}
                        <div className="collapse-title text-xl font-medium flex  gap-3 items-center rounded-t-lg rounded overflow-hidden  bg-[#202b3b] p-2">
                          <img
                            className="rounded-[13px] w-[50px]"
                            src={upcData.gameImg}
                            alt=""
                          />

                          <aside className="match-subtitle p-0 m-0">
                            <h4 className="text-[16px] text-white font-[500]">
                              {upcData.team1}
                              <span className="text-red-600 px-2">VS</span>
                              {upcData.team2}, {upcData.matchType}
                            </h4>
                            <p className="text-[13px] text-[white] font-[500]">
                              {upcData.matchDate} {upcData.matchTime}
                            </p>
                          </aside>
                        </div>

                        {/* collapsed-1 items */}
                        <div className="collapse-content gap-0 m-0 grid grid-cols-1 bg-[#202b3b] rounded-b ">
                          {upcData.options?.map((option) => {
                            return (
                              <div className=" collapse">
                                {/* collapse child */}
                                <input type="checkbox" />

                                <div className="collapse-title flex  justify-between px-0 py-0 text-[16px] font-[500] text-white">
                                  <h2>{option.optionHeader}</h2>
                                  <h4 className="text-[16px] font-[500] text-[#14c8c8]">
                                    Upcoming ....
                                  </h4>
                                </div>
                                {/* collapsed-1 items */}
                                <div className="collapse-content pl-0 pr-0  grid md:grid-cols-2 grid-1 gap-[8px] py-0">
                                  {/* every option and modal */}
                                  {option?.opctionData?.map((child) => {
                                    // console.log(child,child.typeYourRate,"child from ");
                                    return (
                                      <label
                                        htmlFor={child?.typeYourRate}
                                        className="w-full py-0"
                                      >
                                        <p className="bg-[#1a1f2a] duration-200 hover:bg-[#141f2e] px-3 py-3 flex  justify-between text-center text-[12px] font-[600] rounded-[8px]">
                                          <h6 className="text-white">
                                            {' '}
                                            {child?.typeYourOption}
                                          </h6>

                                          <h6 className="bg-[#2d456b] mx-3 text-[9px] text-white px-1 py-[2px] rounded">
                                            {child?.typeYourRate}
                                          </h6>
                                        </p>

                                        <CommonModal
                                          key={child?.typeYourOption}
                                          mainBate={upcData}
                                          child={child}
                                          option={option}
                                          match={upcData}
                                        ></CommonModal>
                                      </label>
                                    )
                                  })}
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Upcoming
