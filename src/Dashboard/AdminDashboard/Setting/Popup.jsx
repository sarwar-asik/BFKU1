import { XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

const Popup = ({ data, refetch }) => {
  const number = data.transtionNumber
  const handaleVerify = (id) => {
    let inp = document.getElementById(`inp${id}`)
    const test = inp.value

    fetch(
      `https://project-khulna-backend-thebrightfuture.vercel.app/updateSetting/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ transtionNumber: test }),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500,
          })
          refetch()
        }
      })
  }
  return (
    <div>
      <input type="checkbox" id={data._id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor={data._id}
            className="px-2 cursor-pointer float-right "
          >
            <XMarkIcon className="w-6"></XMarkIcon>
          </label>
          <div className="md:flex gap-2 items-center">
            <img src={data.img} alt="" className="w-[50px]" />
            <h1 className="text-white">Edit transaction number</h1>
          </div>
          <input
            defaultValue={number}
            id={`inp${data._id}`}
            type="tell"
            name="number"
            className="bg-[#0d1a3170] border border-blue-700 w-full mt-3 h-[40px] rounded px-2 mx-auto"
          />

          <button
            onClick={() => handaleVerify(data._id)}
            type="submit"
            className="mt-[50px] float-right  px-8 py-2 text-white rounded-md bg-[#4428b6]"
          >
            <label htmlFor={data._id} className="">
              Save
            </label>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Popup
