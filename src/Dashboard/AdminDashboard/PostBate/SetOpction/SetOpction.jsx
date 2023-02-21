import React, { useState } from 'react'
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr'
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const SetOpction = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const [toss, setToss] = useState(false)
  const [optionHeader, setOptionHeader] = useState('')
  const [tossTimeout, setTossTimeout] = useState('')

  const optionDataTemplate = {
    typeYourOption: '',
    typeYourRate: '',
  }

  const [opctionFormState, setopctionFormState] = useState([optionDataTemplate])
  const addMore = () => {
    setopctionFormState([...opctionFormState, optionDataTemplate])
  }

  const onChanged = (e, index) => {
    const updatedOpction = opctionFormState.map((borrowed, i) =>
      index === i
        ? Object.assign(borrowed, { [e.target.name]: e.target.value })
        : borrowed,
    )
    setopctionFormState(updatedOpction)
  }

  const handelSubmit = () => {
    const opctionData = []
    for (
      let index = 0;
      opctionFormState ? index < opctionFormState.length : 0;
      index++
    ) {
      const element = opctionFormState[index]
      opctionData.push({
        typeYourOption: element.typeYourOption,
        users: [],
        typeYourRate: element.typeYourRate,
      })
    }
    const postBatedata = [
      {
        matchDate: state.matchDate,
        matchTime: state.matchTime,
        matchType: state.matchType,
        gameType: state.matchValues.match,
        gameImg: state.matchValues.img,
        team1: state.team1,
        team2: state.team2,
        matchStatus: state.matchStatus,
        options: [
          {
            optionHeader: optionHeader,
            tossTime: tossTimeout,
            opctionData: opctionData,

            toss: toss,
          },
        ],
      },
    ]

    console.log('postBatedata', postBatedata)

    fetch('https://project-khulna-backend-thebrightfuture.vercel.app/postBat', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ postBatedata }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your post has been posted',
            showConfirmButton: false,
            timer: 1500,
          })

          navigate('/admin/dashboard')
        }
        console.log('Data form Set Option', data)
      })
  }

  console.log('state data', state)

  return (
    <>
      <div className="mt-6">
        <div>
          <div>
            <label htmlFor="name" className="inline-block mb-1 font-medium">
              Type a option harder
            </label>
            <input
              required
              type="text"
              name="optionHeader"
              placeholder="name of  option header"
              className="flex-grow w-full h-12 px-4 mb-2 font-semibold transition text-white duration-200 bg-gray-500 border border-gray-900 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
              onChange={(e) => setOptionHeader(e.target.value)}
            />
          </div>

          {opctionFormState.map((opction, index) => {
            return (
              <div className="mt-2 lg:grid grid-cols-2 gap-10" key={index}>
                <div>
                  <label
                    htmlFor="name"
                    className="inline-block mb-1 font-medium"
                  >
                    Type Your Option Value {index + 1}
                  </label>
                  <input
                    type="text"
                    name="typeYourOption"
                    onChange={(e) => onChanged(e, index)}
                    value={opction.typeYourOption}
                    placeholder="type your option"
                    className="flex-grow w-full h-12 px-4 mb-2 font-semibold transition text-white duration-200 bg-gray-500 border border-gray-900 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="inline-block mb-1 font-medium"
                  >
                    Type Your Option Rate {index + 1}
                  </label>
                  <input
                    type="text"
                    name="typeYourRate"
                    onChange={(e) => onChanged(e, index)}
                    value={opction.typeYourRate}
                    placeholder="type your  rate"
                    className="flex-grow w-full h-12 px-4 mb-2 font-semibold transition text-white duration-200 bg-gray-500 border border-gray-900 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
            )
          })}
        </div>
        <div>
          <div>
            <button
              type="button"
              onClick={addMore}
              className="font-semibold my-4 bg-gray-600 text-white px-2 py-1 rounded-md hover:bg-gray-500"
            >
              + Add more options
            </button>
            {toss && (
              <div>
                <label htmlFor="name" className="inline-block mb-1 font-medium">
                  Input Toss Time
                </label>
                <input
                  type="time"
                  name="tossTimeout"
                  placeholder="Time Duration"
                  className="flex-grow w-full h-12 px-4 mb-2 font-semibold transition text-white duration-200 bg-gray-500 border border-gray-900 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
                  onChange={(e) => setTossTimeout(e.target.value)}
                />
              </div>
            )}
            <div className="flex items-center gap-2 mt-2">
              {toss ? (
                <>
                  {' '}
                  <p>Cancel this option</p>
                  <button onClick={() => setToss(false)} type="button">
                    <GrCheckboxSelected className="text-xl bg-white "></GrCheckboxSelected>
                  </button>
                </>
              ) : (
                <>
                  {' '}
                  <p>Is it a toss Option ?</p>
                  <button onClick={() => setToss(true)} type="button">
                    <GrCheckbox className="text-xl bg-white "></GrCheckbox>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-start mt-3">
          <input
            type="submit"
            onClick={handelSubmit}
            value="Add your post"
            className="bg-teal-500 px-5 py-2 rounded text-white cursor-pointer"
          />
        </div>
      </div>
    </>
  )
}

export default SetOpction

// ;<div>
//   <input {...register('matchType')} type="text" placeholder="Match Type" />
// </div>
