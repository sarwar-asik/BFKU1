import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { AuthContext } from '../../../../Context/UserContext'

const Withdraw = () => {
  const { user, balance, setBalance } = useContext(AuthContext)

  const handleWithdraw = (event) => {
    event.preventDefault()
    event.preventDefault()
    const form = event.target
    const method = form.method.value
    const account = form.account.value
    const amount = form.amount.value
    const number = form.number.value
    const password = form.password.value
    const withdraw = {
      name: 'withdraw',
      time: new Date().toLocaleTimeString(),
      Date: new Date().toLocaleDateString(),
      method,
      user: user?.email,
      uid: user?.userID,
      sponsorID: user?.sponsorID,
      account,
      club: user?.club,
      balance: user?.balance,
      status: false,
      number,
      amount,
      password,
    }
    console.log(withdraw)
    fetch(
      `https://project-khulna-backend-thebrightfuture.vercel.app/withdraw`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          ...withdraw,
          userID: user.userID,
          email: user?.email,
        }),
      },
    )
      .then((resp) => resp.json())
      .then((data) => {
        if (data.acknowledged) {
          setIsButtonDisabled(true)
          setCountdown(3600) // 3600 seconds = 1 hour
          localStorage.setItem('countdownStartTime', Date.now().toString())
          form.reset()
          setBalance(balance)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `withdraw ${amount} `,
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
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const [countdown, setCountdown] = useState(0)

  useEffect(() => {
    const countdownStartTime = localStorage.getItem('countdownStartTime')
    if (countdownStartTime) {
      const elapsedSeconds = Math.floor(
        (Date.now() - parseInt(countdownStartTime)) / 1000,
      )
      if (elapsedSeconds < 3600) {
        setCountdown(3600 - elapsedSeconds)
        setIsButtonDisabled(true)
      }
    }
  }, [])

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else {
      setIsButtonDisabled(false)
      localStorage.removeItem('countdownStartTime')
    }
  }, [countdown])

  const buttonLabel = isButtonDisabled
    ? `Disabled for ${Math.floor(countdown / 60)}:${
        countdown % (60).toString().padStart(2, '0')
      }`
    : 'Submit'

  return (
    <div className="mt-3">
      <h1 className="text-2xl py-2 px-3 rounded font-bold bg-[#008080] text-white">
        Request a Withdraw
      </h1>
      <form onSubmit={handleWithdraw} action="" className="mt-7 ">
        <section className="grid grid-cols-2 gap-4">
          {/* input-1 */}
          <div className="form-control">
            <label htmlFor="method" className="text-xl font-semibold ">
              Method
            </label>
            <select
              name="method"
              id=""
              className=" bg-[#EEEEEE] outline-none  py-2 rounded w-full mt-2 text-slate-600 px-2"
            >
              <option value="" disabled>
                Select Method{' '}
              </option>
              <option value="Bkash" id="b1">
                Bkash{' '}
              </option>
              <option value="Nagad" id="n2">
                Nagad
              </option>
            </select>
          </div>
          {/* input-2 */}
          <div className="form-control">
            <label htmlFor="account" className="text-xl font-semibold ">
              Account Type
            </label>
            <select
              name="account"
              id=""
              className=" bg-[#EEEEEE] outline-none  py-2 rounded w-full mt-2 text-slate-600 px-2"
            >
              <option value="" disabled>
                {' '}
                Account Type
              </option>
              <option value="personal">Personal</option>
              <option value="agent">Agent</option>
            </select>
          </div>
          {/* input-3 */}
          <div className="form-control">
            <label htmlFor="method" className="text-xl font-semibold ">
              Amount
            </label>
            <input
              name="amount"
              type="number"
              placeholder="Amount"
              required
              id=""
              className=" bg-[#EEEEEE]  outline-none  py-2 rounded w-full mt-2 text-slate-600 px-2"
            />
          </div>
          {/* input-4 */}
          <div className="form-control">
            <label htmlFor="number" className="text-xl font-semibold ">
              To Number
            </label>
            <input
              name="number"
              type="number"
              placeholder="To"
              required
              id=""
              className=" bg-[#EEEEEE]  outline-none  py-2 rounded w-full mt-2 text-slate-600 px-2"
            />
          </div>
        </section>

        <footer className="mt-3">
          <div className="form-control">
            <label htmlFor="password" className="text-xl font-semibold ">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              id=""
              className=" bg-[#EEEEEE]  py-2 rounded w-full mt-2 text-slate-600 px-2 outline-none"
            />
          </div>
        </footer>
        <div className=" w-[60%] mx-[auto] mt-2">
          {/* <input
            type="submit"
        
            className={`
            ${isButtonDisabled}
            py-2 rounded  mt-2 bg-[#008080] px-2 text-white 
            font-bold text-2xl font-serif w-full cursor-pointer`}
            value={buttonLabel}
          /> */}

          {/* <button
            type="submit"
            className={`
            py-2 rounded  mt-2 bg-[#008080] px-2 text-white 
            font-bold text-2xl font-serif w-full cursor-pointer`}
          >
            {buttonLabel}
          </button> */}
          {!isButtonDisabled ? (
            <button
              className={`
 py-2 rounded  mt-2 bg-[#008080] px-2 text-white 
 font-bold text-2xl font-serif w-full cursor-pointer`}
              type="submit"
              // onClick={buttonLabel}
            >
              {' '}
              Submit
            </button>
          ) : (
            <button
              className={`
 py-2 rounded  mt-2 bg-[#008080] px-2 text-white 
 font-bold text-2xl font-serif w-full cursor-pointer`}
              diseble
            >
              Wait for widraw{' '}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default Withdraw
