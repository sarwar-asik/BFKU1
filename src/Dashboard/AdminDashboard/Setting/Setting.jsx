import React from 'react'
import { useQuery } from '@tanstack/react-query'

import Popup from './Popup'
import Swal from 'sweetalert2'
const Setting = () => {
  const { data: pData = [], refetch } = useQuery({
    queryKey: ['pData'],
    queryFn: async () => {
      const res = await fetch(
        'https://project-khulna-backend-thebrightfuture.vercel.app/getSetting',
      )
      const data = await res.json()
      return data
    },
  })

  const { data: noticeBoardData } = useQuery({
    queryKey: ['noticeBoard'],
    queryFn: async () => {
      const res = await fetch(
        'https://project-khulna-backend-thebrightfuture.vercel.app/notice',
      )
      const data = await res.json()
      return data.data
    },
  })

  const noticeBoard = (noticeBoardData ?? [])[0]
  console.log(noticeBoard)

  const handelNoticeSubmit = async (e) => {
    e.preventDefault()
    const noticeBoard = e.target.noticeBoard.value
    const _id = noticeBoardData[0]?._id
    console.log(_id)
    const res = await fetch(
      `https://project-khulna-backend-thebrightfuture.vercel.app/notice/${_id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ noticeBoard }),
      },
    )
    const data = await res.json()
    console.log(data)
    if (data) {
      Swal.fire('Your Notice has been updated', '', 'success')
      refetch()
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Something Went Wrong',
        icon: 'error',
        confirmButtonText: 'Ok',
      })
    }
  }

  return (
    <div className="w-[90%] mx-auto mt-3">
      <main className="">
        <header className="lg:flex justify-between">
          <h4 className="text-[19px] font-[700] ">Setting</h4>
        </header>
        <hr className="w-full mt-2 border-[1px]  border-slate-600" />
        <div className="">
          <div className=" bg-[#192125fe] mt-2 rounded-lg p-3 mx-auto md:w-[700px] w-[97%]">
            <form action="" onSubmit={handelNoticeSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text-alt">Notice Board</span>
                </label>
                <textarea
                  className="bg-[#EEEEEE]  py-2 rounded w-full mt-2 text-slate-600 px-2 outline-none"
                  placeholder="Noice Board"
                  type=""
                  name="noticeBoard"
                  defaultValue={noticeBoard?.noticeBoard}
                ></textarea>
              </div>

              <input
                type="submit"
                value="Save"
                className="bg-[#a1136d]  py-2 rounded w-full mt-2 text-white px-2 outline-none
                cursor-pointer
                "
              />
            </form>
          </div>

          <div className="bg-[#192125fe] mt-2 rounded-lg p-3 mx-auto md:w-[700px] w-[97%]">
            <header className="capitalize border-b border-gray-600 pb-1 flex justify-between">
              <h4 className="font-[600]">Transaction numbers</h4>
            </header>

            <div>
              {pData.map((data) => (
                <li
                  key={data._id * 2}
                  className="py-1 mt-2 md:flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-6">
                    <img src={data.img} className="w-[20px]" alt="" />
                    <p>{data?.mathod}</p>
                    <h2 id={`num${data._id}`}>{data.transtionNumber}</h2>
                  </div>
                  <div className="flex items-center">
                    <label
                      htmlFor={data._id}
                      className="bg-[#a1136d] px-3 py-1 rounded text-white"
                    >
                      Edit
                    </label>
                    <Popup refetch={refetch} data={data}></Popup>
                  </div>
                </li>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Setting
