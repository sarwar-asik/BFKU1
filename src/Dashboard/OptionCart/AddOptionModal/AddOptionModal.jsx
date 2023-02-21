import React, { useState } from 'react'
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr'
import Swal from 'sweetalert2'

const AddOptionModal = ({ lmData, mOpt, refetch }) => {
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

    const id = lmData?._id

    fetch(
      `https://project-khulna-backend-thebrightfuture.vercel.app/addOptionPost/${id}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          optionHeader: optionHeader,
          tossTime: tossTimeout,
          opctionData: opctionData,
          toss: toss,
        }),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your post has been posted',
          })
          refetch()
        }
        console.log('Data form Set Option', data)
      })
  }

  return (
    <>
      <input type="checkbox" id={mOpt} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={mOpt}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add Option</h3>

          <section className="py-4">
            <div className="mt-5">
              <div>
                <input
                  type="text"
                  name="optionHeader"
                  placeholder="name of  option header"
                  className="text-white input input-bordered w-full bg-gray-600 mb-2"
                  onChange={(e) => setOptionHeader(e.target.value)}
                />

                {opctionFormState.map((opction, index) => {
                  return (
                    <div className="mt-2" key={index}>
                      <input
                        type="text"
                        name="typeYourOption"
                        onChange={(e) => onChanged(e, index)}
                        value={opction.typeYourOption}
                        placeholder="type your option"
                        className="text-white input input-bordered w-full bg-gray-600 border-green-300 mb-2"
                      />

                      <input
                        type="text"
                        name="typeYourRate"
                        onChange={(e) => onChanged(e, index)}
                        value={opction.typeYourRate}
                        placeholder="type your  rate"
                        className="text-white input input-bordered w-full bg-gray-600 border-green-300"
                      />
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
                    <input
                      type="time"
                      name="tossTimeout"
                      placeholder="Time Duration"
                      className="text-white input input-bordered w-full bg-gray-600 border-green-300"
                      onChange={(e) => setTossTimeout(e.target.value)}
                    />
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
          </section>
        </div>
      </div>
    </>
  )
}

export default AddOptionModal
