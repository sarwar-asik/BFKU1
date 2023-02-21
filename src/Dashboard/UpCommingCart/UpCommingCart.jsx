import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CartModal from '../OptionCart/CartModal'
import ScoreModal from '../OptionCart/ScoreModal'
import AddOptionCardMoodal from '../OptionCart/AddOptionModal/AddOptionModal'
import Swal from 'sweetalert2'

const UpCommingCart = ({ upData, setRefresh }) => {
  const [showBody, setShowBody] = useState(false)
  const [showOption, setShowOption] = useState(false)
  const [activeEdit, setActiveEdit] = useState(false)
  const [showItem, setShowItem] = useState(false)
  const [hideHeader, setHideHeader] = useState(false)
  const [restart, setRestart] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [hideHeaderOption, setHideHeaderOption] = useState(false)
  const [popData, setPopData] = useState(null)

  const hideSingleOption = () => {
    return <p>helo world</p>
  }
  const [activePop, setActivePop] = useState(false)
  const addOption = (id) => {
    setActivePop(true)
  }
  const [hideSItem, setHideSItem] = useState(false)

  const handleDisable = (data) => {
    console.log(data)
  }

  const hideToPostHistory = (data) => {
    fetch(
      `https://project-khulna-backend-thebrightfuture.vercel.app/addposthistory`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    )
      .then((resp) => resp.json())
      .then((result) => {
        console.log(result)
        if (result.acknowledged) {
          setShowBody(true)
          setRefresh(result)

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Hidden`,
            showConfirmButton: false,
            timer: 1500,
          })
        } else {
          setShowBody(true)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: result.error,
          })
        }
      })
  }

  const duplicate = (data) => {
    data?.options.push({
      opctionData: data.options[0].opctionData,
      optionHeader: data.options[0].optionHeader,
      toss: false,
      tossTime: '',
    })

    console.log(data?.options)
  }

  //form values
  const submitHandler = (e) => {
    e.preventDefault()
    const form = e.target
    const values = {
      team1: form.team1.value,
      team2: form.team2.value,
      matchType: form.matchtype.value,
      matchDate: form.matchDate.value,
      matchTime: form.matchTime.value,
      option: form.typeYourOption.value,
      rate: form.typeYourRate.value,
      bate: form.bate.value,
    }
    console.log(values)
  }

  return (
    <div>
      {upData?.postBatedata.map((uData, index) => (
        <form
          onSubmit={submitHandler}
          className="bg-[#41465F] overflow-hidden mt-5 rounded-[12px] p-3  relative"
          key={index * 3}
        >
          <div className="header flex md:items-start  ">
            <div className="">
              <img
                src={uData.gameImg}
                className="w-[70px] bg-[#2922398d] rounded-lg"
                alt=""
              />
            </div>
            <div className="ml-3 w-full md:flex justify-between">
              <div className=" w-full">
                <h2 className="font-bold cursor-pointer text-white md:text-[] text-[13px] flex items-center">
                  {' '}
                  {activeEdit ? (
                    <input
                      name="team1"
                      defaultValue={uData.team1}
                      type="text"
                      className="bg-[#343B55] px-2  border border-[#325AC1] rounded w-[70px] placeholder:text-[13px] font-[400]"
                    />
                  ) : (
                    <p onClick={() => setHideHeaderOption(!hideHeaderOption)}>
                      {uData.team1}{' '}
                    </p>
                  )}{' '}
                  <span className="text-[gold] px-1"> VS </span>{' '}
                  {activeEdit ? (
                    <input
                      name="team2"
                      defaultValue={uData.team2}
                      type="text"
                      className="bg-[#343B55] px-2  border border-[#325AC1] rounded w-[70px] placeholder:text-[13px] font-[400]"
                    />
                  ) : (
                    <p onClick={() => setHideHeaderOption(!hideHeaderOption)}>
                      {uData.team2}
                    </p>
                  )}
                  ,{' '}
                  {activeEdit ? (
                    <input
                      name="matchtype"
                      defaultValue={uData.matchType}
                      type="text"
                      className="bg-[#343B55] px-2 border border-[#325AC1] rounded w-[50px] placeholder:text-[13px] font-[400]"
                    />
                  ) : (
                    <p onClick={() => setHideHeaderOption(!hideHeaderOption)}>
                      {uData.matchType}
                    </p>
                  )}{' '}
                </h2>

                <p className="text-[#BBBBBB] flex items-center cursor-pointer">
                  {activeEdit ? (
                    <input
                      name="matchDate"
                      defaultValue={uData.matchDate}
                      type="date"
                      className="bg-[#343B55] px-2 border border-[#325AC1] rounded w-[auto] text-[12px] placeholder:text-[13px] mt-2 font-[400]"
                    />
                  ) : (
                    <p onClick={() => setHideHeaderOption(!hideHeaderOption)}>
                      {uData.matchDate}
                    </p>
                  )}
                  ,
                  {activeEdit ? (
                    <input
                      name="matchTime"
                      defaultValue={uData.matchTime}
                      type="time"
                      className="bg-[#343B55] px-2 ml-1 border border-[#325AC1] rounded w-[auto] text-[12px] placeholder:text-[13px] mt-2 font-[400]"
                    />
                  ) : (
                    <p
                      onClick={() => setHideHeaderOption(!hideHeaderOption)}
                      className="ml-1"
                    >
                      {uData.matchTime}
                    </p>
                  )}
                </p>
              </div>
              <div className="relative md:block flex gap-2 items-center py-1 ">
                <select className="w-[110px] px-2  bg-[#20242E] focus:outline-none h-[30px] rounded-md text-[13px]">
                  <option disabled selected>
                    Select Admin
                  </option>
                  <option>Admin1</option>
                  <option>Admin2</option>
                  <option>Admin3</option>
                  <option>Admin4</option>
                </select>
                <div className="md:absolute right-0 flex items-center gap-1 top-[40px]">
                  <button
                    type="button"
                    className="bg-[#26252e] font-[500] px-3 py-[3px] md:ml-2 rounded md:my-auto my-2 "
                  >
                    <label
                      className="text-white text-[12px] font-[400] py-0"
                      htmlFor={`${index}s`}
                    >
                      Score
                    </label>
                  </button>
                  <ScoreModal
                    key={`${index * 7}s`}
                    id={`${index * 7}s`}
                    data={uData}
                  ></ScoreModal>

                  <button
                    className="text-white w-[60px] bg-[#de2046] px-2 py-1 rounded text-[13px]"
                    style={{
                      display: uData.status === 'live' ? 'none' : 'block',
                      backgroundColor:
                        uData.status === 'live' ? '#de2046' : '#de2046',
                    }}
                  >
                    Go Live
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              activeEdit ? 'flex' : 'flex'
            } flex-wrap gap-1 items-center mt-4`}
          >
            <button
              onClick={() => handleDisable(uData)}
              className={`${
                activeEdit ? 'px-2 py-1 md:text-[11px]' : 'px-1 py-1'
              } bg-[#363B68] duration-300 hover:bg-[#2e3259] flex items-center rounded-lg `}
            >
              Disable
            </button>
            {/* <Link
              to="/admin/dashboard/postBate"
              className={`${
                activeEdit ? "px-2 py-1 md:text-[11px]" : "px-1 py-1"
              } bg-[#363B68] duration-300 hover:bg-[#2e3259] flex items-center rounded-lg `}
            >
              Add Option
            </Link> */}

            <label
              htmlFor="AddOption"
              className={`${
                activeEdit ? 'px-2 py-1 md:text-[11px]' : 'px-1 py-1'
              } bg-[#363B68] duration-300 hover:bg-[#2e3259] flex items-center rounded-lg `}
            >
              Add Option
            </label>

            <button className="bg-[#20242E] px-2 duration-300  hover:bg-[#20242E] rounded-md">
              {activeEdit ? (
                <button
                  type="button"
                  className={`${
                    activeEdit ? 'text-[11px]' : 'text-[auto]'
                  } px-2 py-1 duration-300 bg-[#20242E] hover:bg-[#20242E] rounded-md`}
                  onClick={() => setActiveEdit(!activeEdit)}
                >
                  Save
                </button>
              ) : (
                <button
                  type="button"
                  className={`${
                    activeEdit ? 'text-[11px]' : 'text-[auto]'
                  } px-2 py-1 duration-300 bg-[#20242E] hover:bg-[#20242E] rounded-md`}
                  onClick={() => setActiveEdit(!activeEdit)}
                >
                  edit
                </button>
              )}
            </button>
            <button>
              {showBody ? (
                <button
                  onClick={() => setShowBody(false)}
                  className="px-2 py-1  duration-300 bg-[#20242E] hover:bg-[#20242E] rounded-md"
                >
                  unhide
                </button>
              ) : (
                <button
                  onClick={() => hideToPostHistory(uData)}
                  className={`${
                    activeEdit ? 'text-[11px]' : 'text-[auto]'
                  } px-2 py-1 duration-300 bg-[#20242E] hover:bg-[#20242E] rounded-md`}
                >
                  Hide
                </button>
              )}
            </button>
          </div>
          <div className={`${hideHeaderOption ? 'hidden' : 'block'}`}>
            <div className=" flex flex-wrap m-auto items-center capitalize gap-2 mt-2 text-[15px]">
              <button
                onClick={() => duplicate(uData)}
                className="bg-[#282947] text-white px-3 py-1 flex items-center rounded-md"
              >
                copy
              </button>
              <button
                onClick={() => setRestart(true)}
                className="bg-[#AC0936] text-white px-3 py-1 flex items-center rounded-md"
              >
                Restart
              </button>
              <button
                onClick={() => setShowItem(!showItem)}
                className="bg-[#282947] text-white px-3 py-1 flex items-center rounded-md"
              >
                {showItem ? <>hidden</> : <>hide</>}
              </button>
              <button
                onClick={() => setHideHeader(!hideHeader)}
                className="bg-[#282947] text-white px-3 py-1 flex items-center rounded-md"
              >
                {hideHeader ? <>unhide header</> : <>hide header</>}
              </button>
              <button
                onClick={() => setDisabled(!disabled)}
                className="bg-[#282947] text-white px-3 py-1 flex items-center rounded-md"
              >
                disable
              </button>
              <label
                htmlFor={index}
                className="bg-[#282947] text-white px-3 py-1 flex items-center rounded-md"
                onClick={() => addOption(index)}
              >
                + add{' '}
              </label>

              <button
                onClick={() => setHideSItem(!hideSItem)}
                className="bg-gray-800 px-2 py-[2px] rounded"
              >
                Hide
              </button>
              <CartModal
                key={index * 44}
                popData={popData}
                index={index * 44}
              ></CartModal>
            </div>

            {uData?.options?.map((mOp, index) => (
              <div className="">
                <h1
                  onClick={() => setShowOption(!showOption)}
                  className={`${
                    hideHeader || hideSItem ? 'hidden' : 'flex'
                  }  text-white font-bold mt-2 cursor-pointer justify-between`}
                >
                  {activeEdit ? (
                    <input
                      name="optionHeader"
                      defaultValue={mOp.optionHeader}
                      type="text"
                      className="bg-[#343B55] px-2  border border-[#325AC1] rounded w-[auto] placeholder:text-[13px] font-[400]"
                    />
                  ) : (
                    <p>{mOp.optionHeader}</p>
                  )}

                  <p className="bg-[#008080] text-white font-[400] text-[14px] px-2 rounded">
                    Total : {mOp.opctionData.length}
                  </p>
                </h1>
                {mOp.opctionData?.map((opt, index) => (
                  <div key={index * 6}>
                    <div
                      key={index}
                      className={`${
                        hideHeader || hideSItem ? 'hidden' : 'flex'
                      }  ${
                        showOption ? 'hidden' : 'flex'
                      } relative md:overflow-hidden overflow-scroll bg-[#282F49] p-2 rounded-md w-[full]  justify-between items-center gap-2 mt-2`}
                    >
                      <div
                        className={`${
                          disabled ? 'md:flex' : 'hidden'
                        }  bg-[#17222ea3] gap-2 absolute left-0 right-0 top-0 bottom-0 w-full h-full z-[1000]  justify-center items-center`}
                      ></div>
                      {activeEdit ? (
                        <input
                          name="typeYourOption"
                          defaultValue={opt.typeYourOption}
                          type="text"
                          className="bg-[#343B55] w-[110px] px-2 text-[13px] h-[28px] border border-[#325AC1] rounded"
                        />
                      ) : (
                        <p>{opt.typeYourOption}</p>
                      )}

                      <div className="flex items-center gap-2 md:text-[16px] ">
                        <button
                          className={`${
                            activeEdit
                              ? ''
                              : 'bg-[#008080] text-white px-2 rounded'
                          }`}
                        >
                          {activeEdit ? (
                            <input
                              name="typeYourRate"
                              defaultValue={opt.typeYourRate}
                              type="tell"
                              className="bg-[#343B55] px-2  w-[40px] border border-[#325AC1] rounded"
                            />
                          ) : (
                            <p>{opt.typeYourRate}</p>
                          )}
                        </button>
                        <button className="bg-[#076a6a82] text-white px-2 flex items-center rounded">
                          win
                        </button>
                        <span className="flex items-center">
                          $
                          {activeEdit ? (
                            <input
                              name="bate"
                              type="text"
                              placeholder="555"
                              className="bg-[#343B55] px-2 ml-3 border border-[#325AC1] rounded w-[40px]"
                            />
                          ) : (
                            <>55</>
                          )}
                        </span>
                        <span className="bg-[#41465F] text-white px-2 rounded">
                          {restart ? <>0</> : <>2</>}
                        </span>
                        <button
                          onClick={hideSingleOption}
                          className="bg-[#5a5a5a71] text-white px-2 rounded"
                        >
                          Hide
                        </button>
                        <button className="bg-[#da1414ba] text-white px-2 rounded">
                          refound
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </form>
      ))}
      <AddOptionCardMoodal></AddOptionCardMoodal>
    </div>
  )
}

export default UpCommingCart
