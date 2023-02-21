import React, { useEffect, useState } from 'react'
import CommonModal from '../../CommonModal/CommonModal'
import '../HomeStyle/HomeStyle.css'

const Upcoming = () => {
  const [adminMatchControl, setAdminMatchControl] = useState([])
  useEffect(() => {
    fetch('https://project-khulna-backend-thebrightfuture.vercel.app/getBat')
      .then((res) => res.json())
      .then((data) => setAdminMatchControl(data))
  }, [])
  const [upcomingsData, setUpcomingsData] = useState()

  const upcomingControlData = adminMatchControl.map((mData) => {
    const upCommingControl = mData.postBatedata.filter(
      (flData) => flData.matchStatus === 'UpComing',
    )
    return upCommingControl
  })
  console.log(upcomingControlData, '__________')
  return (
    <div className="container mx-auto ">
      <h1 className="live-match bg-[#EEEEEE] px-[14px] py-[16px] text-[#008080] pl-[14px] rounded-[4px] text-[19px] font-[600]">
        Coming Soon ....
      </h1>
      <div className="flex flex-col  gap-[18px] py-[16px] rounded">
        {upcomingControlData.map((upcData, index) =>
          upcData.map((nData) => (
            <div className="w-full ">
              <div className="match-header flex items-center gap-3 w-full">
                <div
                  key={index * 61}
                  className="collapse text-black font-[500]  bg-[#EEEEEE] rounded-[10px] p-[14px] w-full"
                >
                  <input type="checkbox" />
                  {/* top section */}
                  <div className="collapse-title text-xl font-medium flex  gap-3 items-center rounded-t-lg  bg-white px-1 py-3">
                    <img
                      className="rounded-[13px] w-[50px]"
                      src={nData.gameImg}
                      alt=""
                    />

                    <aside className="match-subtitle">
                      <h4 className="text-[15px] text-black font-[500]">
                        {nData.team1},{nData.team2}, {nData.matchType}
                      </h4>
                      <p className="text-[13px] text-[#757575] font-[500]">
                        {nData.matchDate} {nData.matchTime}
                      </p>
                    </aside>
                  </div>

                  {/* collapsed-1 items */}
                  <div className="collapse-content  grid grid-cols-1  bg-white  ">
                    {nData.options?.map((option) => {
                      return (
                        <div className=" collapse">
                          {/* collapse child */}
                          <input type="checkbox" />

                          <div className="collapse-title flex  justify-between px-0 py-0 text-[16px] font-[500] text-black">
                            <h2>{option.optionHeader}</h2>
                            <h4 className="text-[16px] font-[500] text-[#008080]">
                              Upcoming ....
                            </h4>
                          </div>
                          {/* collapsed-1 items */}
                          <div className="collapse-content pl-0 pr-0  flex gap-[8px] py-0">
                            {/* every option and modal */}
                            {option?.opctionData?.map((child, index) => {
                              console.log(
                                child.typeYourOption + child?.typeYourRate,
                                'HTMLFOR',
                              )

                              return (
                                <label
                                  htmlFor={
                                    child.typeYourOption + child?.typeYourRate
                                  }
                                  className="w-full py-0"
                                >
                                  <p className="bg-[#E8F4F4] px-3 py-3 flex  justify-between text-center text-[12px] font-[600] rounded-[8px]">
                                    <h6 className="text-slate-400">
                                      {' '}
                                      {child?.typeYourOption}
                                    </h6>

                                    <h6 className="bg-[#008080] mx-3 text-[9px] text-white px-1 py-[2px] rounded">
                                      {child?.typeYourRate}
                                    </h6>
                                  </p>

                                  <CommonModal
                                    key={
                                      child.typeYourOption +
                                      child?.typeYourRate +
                                      index
                                    }
                                    mainId={upcData._id}
                                    mainBate={nData}
                                    child={child}
                                    option={option}
                                    name={'UpComing'}
                                    match={option}
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
          )),
        )}
      </div>
    </div>
  )
}

export default Upcoming
