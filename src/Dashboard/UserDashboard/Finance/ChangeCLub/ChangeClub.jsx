import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { AuthContext } from '../../../../Context/UserContext'

const ChangeClub = () => {
  const { databaseUser, user, refetch } = useContext(AuthContext)
  console.log(databaseUser)

  const HandleChangeCLub = (event) => {
    event.preventDefault()
    const club = event.target.club.value
    const password = event.target.password.value
    const changeClub = { club, password }
    const userData = { ...changeClub, userID: user.userID, email: user?.email }

    fetch(
      'https://project-khulna-backend-thebrightfuture.vercel.app/Changeclub',
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(userData),
      },
    )
      .then((resp) => resp.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch()
          event.target.reset()
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Changed ${club} `,
            showConfirmButton: false,
            timer: 1500,
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Wrong Password',
            text: data.error,
            footer: '<a href="">Why do I have this issue?</a>',
          })
        }
      })
  }

  const [clubs, setClubs] = useState([])
  useEffect(() => {
    fetch(
      `https://project-khulna-backend-thebrightfuture.vercel.app/totalclubs`,
    )
      .then((resp) => resp.json())
      .then((data) => {
        setClubs(data)
      })
  }, [])

  return (
    <div className="mt-3">
      <h1 className="text-2xl py-2 px-3 rounded font-bold bg-[#008080] text-white">
        Change Club
      </h1>
      <form onSubmit={HandleChangeCLub} action="" className="mt-7 ">
        <div className="section">
          {/* Club*/}
          <div className="form-control">
            <label htmlFor="club" className="text-xl font-semibold ">
              Presnt Club{' '}
            </label>
            <input
              className=" bg-[#EEEEEE]  py-2 rounded w-full mt-2 text-slate-600 px-2 outline-none"
              value={databaseUser?.club}
            />
          </div>
          <div className="form-control">
            <label htmlFor="club" className="text-xl font-semibold ">
              club
            </label>
            <select
              name="club"
              id=""
              className=" bg-[#EEEEEE]  py-2 rounded w-full mt-2 text-slate-600 px-2 outline-none"
            >
              <option value="" disabled>
                Select a club{' '}
              </option>
              {clubs?.map((club) => (
                <option value={club?.name}>{club?.name}</option>
              ))}
            </select>
          </div>
          {/* Password*/}
          <div className="form-control mt-3">
            <label htmlFor="password" className="text-xl font-semibold ">
              Current Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Current Password"
              id=""
              className=" bg-[#EEEEEE]  py-2 rounded w-full mt-2 text-slate-600 px-2 outline-none"
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

export default ChangeClub
