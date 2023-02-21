import React, { useContext, useState } from 'react'
import Swal from 'sweetalert2'
import { AuthContext } from '../../../../Context/UserContext'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const Deposit = () => {
  const [Number, setNumber] = useState('')
  const { user, balance, setBalance } = useContext(AuthContext)
  const [numberData, setNumberData] = useState(null)

  const handleDeposit = (event) => {
    event.preventDefault()
    const form = event.target
    const method = form.method.value
    const number = form.number.value
    const amount = form.amount.value
    const from = form.from.value
    const transitionID = form.transitionID.value
    const deposit = {
      method,
      name: 'deposit',
      time: new Date().toLocaleTimeString(),
      Date: new Date().toLocaleDateString(),
      number,
      user: user?.email,
      uid: user?.userID,
      sponsorID: user?.sponsorID,
      amount,
      club: user?.club,
      balance: user?.balance,
      status: false,
      from,
      transitionID,
    }

    fetch(`https://project-khulna-backend-thebrightfuture.vercel.app/deposit`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(deposit),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        if (data.acknowledged) {
          form.reset()
          setBalance(balance)
          Swal.fire({
            position: 'top-end',
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
  }

  const apiUrl =
    'https://project-khulna-backend-thebrightfuture.vercel.app/getSetting'

  // make GET request to API endpoint
  axios
    .get(apiUrl)
    .then((response) => {
      setNumberData(response.data)
    })
    .catch((error) => {
      console.error(error)
    })

  return (
    <div className="mt-3">
      <h1 className="text-2xl py-2 px-3 rounded font-bold bg-[#008080] text-white">
        Request a Deposit
      </h1>
      {/* form */}
      <form onSubmit={handleDeposit} action="" className="mt-7 ">
        <section className="grid grid-cols-2 gap-4">
          {/* input-1 */}
          <div className="form-control">
            <label htmlFor="method" className="text-xl font-semibold ">
              Method
            </label>
            <select
              name="method"
              id=""
              className=" bg-[#EEEEEE]  py-2 outline-none rounded w-full mt-2 text-slate-600 px-2"
              onChange={(e) => setNumber(e.target.value)}
            >
              <option value="" disabled>
                Select Method{' '}
              </option>
              {numberData?.map((data) => {
                return <option value={data?.method}>{data?.mathod}</option>
              })}
            </select>
          </div>
          {/* input-2 */}
          <div className="form-control">
            <label htmlFor="number" className="text-xl font-semibold ">
              To
            </label>
            <select
              name="number"
              id=""
              className=" bg-[#EEEEEE]  py-2 outline-none rounded w-full mt-2 text-slate-600 px-2"
            >
              <option disabled>Select Number </option>
              {numberData?.map((data) => {
                return (
                  <option value={data.transtionNumber}>
                    {data.transtionNumber}
                  </option>
                )
              })}
            </select>
          </div>
          {/* input-3 */}
          <div className="form-control">
            <label htmlFor="method" className="text-xl font-semibold ">
              Amount
            </label>
            <input
              name="amount"
              placeholder="Amount"
              id=""
              className=" bg-[#EEEEEE]  py-2 outline-none rounded w-full mt-2 text-slate-600 px-2"
              required
            />
          </div>
          {/* input-4 */}
          <div className="form-control">
            <label htmlFor="from" className="text-xl font-semibold ">
              From
            </label>
            <input
              name="from"
              placeholder="From"
              id=""
              className=" bg-[#EEEEEE]  py-2 outline-none rounded w-full mt-2 text-slate-600 px-2"
              required
            />
          </div>
        </section>

        <footer className="mt-3">
          <div className="form-control">
            <label htmlFor="transitionID" className="text-xl font-semibold ">
              Transaction Number
            </label>
            <input
              name="transitionID"
              type="text"
              id=""
              className="bg-whit py-2 text-slate-600 rounded w-full mt-2 bg-[#EEEEEE] px-2  outline-none"
              required
            />
          </div>
        </footer>
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

export default Deposit
