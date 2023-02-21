import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Swal from 'sweetalert2'

const Modal = ({ user, setFindData, setGetId }) => {
  const handleData = (e) => {
    e.preventDefault()
    const form = e.target
    const amount = form.amount.value
    // console.log(amount,"....");
    const TotoalData = {
      ...user,
      amount,
    }
    fetch(
      `https://project-khulna-backend-thebrightfuture.vercel.app/addAmount`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(TotoalData),
      },
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        if (data.acknowledged) {
          form.reset()

          Swal.fire({
            icon: 'success',
            title: `Deposit ${amount} `,
            showConfirmButton: false,
            timer: 1500,
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.error,
          })
        }
      })
    console.log(TotoalData)
  }

  return (
    <div>
      <input type="checkbox" id={user._id} className="modal-toggle" />
      <div className="modal bg-[#131b20b0]">
        <form
          onSubmit={handleData}
          className="modal-box md:w-[400px] w-[96%] h-[] py-8"
        >
          <label
            className="float-right bg-[#1d242f] p-1 rounded "
            onClick={() => setGetId(user._id)}
            htmlFor={user._id}
          >
            <XMarkIcon className="w-6 text-white"></XMarkIcon>
          </label>
          <h1 className="text-2xl mt-4 text-center font-bold">
            Deposit amount{' '}
          </h1>
          <br />
          <input
            className="mt-1 text-white bg-[#272D42] border-2 border-[#325AC1] w-full py-2 rounded-lg px-2"
            placeholder="Your deposit amount"
            type="tell"
            name="amount"
            onBlur={(e) => setFindData(e.target.value)}
          />
          <div className="modal-action">
            <button
              type="submit"
              onClick={() => setGetId(user._id)}
              htmlFor={user._id}
              className="btn flex items-center w-full bg-[#1d2337] border-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal
