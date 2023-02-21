import React, { useContext } from 'react'
import Swal from 'sweetalert2'
import { AuthContext } from '../../../../Context/UserContext'

const BalanceTrans = () => {
  const { user } = useContext(AuthContext)
  // console.log(user);
  const handleTransfer = (event) => {
    event.preventDefault()
    const form = event.target
    const password = form.password.value
    const uid = form.uid.value
    const amount = form.amount.value

    const Transfer = {
      name: 'balanceTransfer',
      time: new Date().toLocaleTimeString(),
      Date: new Date().toLocaleDateString(),
      user: user?.email,
      uid: user?.userID,
      toUid: uid,
      sponsorID: user?.sponsorID,
      club: user?.club,
      balance: user?.balance,
      status: false,
      password,
      email: user?.email,
      userID: user?.userID,
      amount,
    }

    console.log(Transfer)
    fetch(
      'https://project-khulna-backend-thebrightfuture.vercel.app/addTransfer',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(Transfer),
      },
    )
      .then((resp) => resp.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Transfer ${amount} `,
            showConfirmButton: false,
            timer: 1500,
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.error,
            footer: '<a href="">Why do I have this issue ?</a>',
          })
        }
      })
  }

  return (
    <div className="mt-3">
      <h1 className="text-2xl py-2 px-3 rounded font-bold bg-[#008080] text-white">
        Transfer Balance
      </h1>
      <form onSubmit={handleTransfer} action="" className="mt-7 ">
        <div className="section">
          {/* UserID*/}
          <div className="form-control">
            <label htmlFor="club" className="text-xl font-semibold ">
              To UserID
            </label>
            <input
              name="uid"
              type="number"
              placeholder="user ID"
              id=""
              className=" bg-[#EEEEEE] outline-none py-2 rounded w-full mt-2 text-slate-600 px-2"
            />
          </div>

          {/* amount */}
          <div className="form-control mt-3">
            <label htmlFor="amount" className="text-xl font-semibold ">
              Amount
            </label>
            <input
              name="amount"
              type="number"
              placeholder="Amount"
              id=""
              className=" bg-[#EEEEEE] outline-none py-2 rounded w-full mt-2 text-slate-600 px-2"
            />
          </div>
          {/* password*/}
          <div className="form-control mt-3">
            <label htmlFor="password" className="text-xl font-semibold ">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="*******"
              id=""
              className=" bg-[#EEEEEE] outline-none  py-2 rounded w-full mt-2 text-slate-600 px-2"
            />
          </div>
        </div>

        <div className=" w-[60%] mx-[auto] mt-2">
          <input
            type="submit"
            className="py-2 rounded  mt-2 bg-[#008080] px-2 text-white font-bold text-2xl font-serif w-full cursor-pointer"
          />
        </div>
      </form>
    </div>
  )
}

export default BalanceTrans
