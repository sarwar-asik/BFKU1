import React, { useContext, useState } from 'react'
import image from '../../../Assctes/adminDashbordIcon/adminLogo.png'

import AdminProfile from '../../../Dashboard/AdminDashboard/PasswordChangeAdmin/AdminProfile'
import useAdmin from '../../../Hooks/useAdmin'
import { AuthContext } from '../../../Context/UserContext'
import Swal from 'sweetalert2'

const PasswordChange = () => {
  const { user } = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)

  const { email, name, phone, club, sponsorID, userID, balance } = user
  const [changePassword, setChangePassword] = useState(false)

  const handlePassworChange = (event) => {
    event.preventDefault()

    //  const fromLocalStorage = localStorage.getItem("user")
    // console.log(fromLocalStorage);

    const form = event.target
    const currentPassword = form.currentPassword.value
    const newPassword = form.newPassword.value
    const confirm = form.confirm.value
    const data = {
      currentPassword,
      newPassword,
      usrID: user?.userID,
      email: user?.email,
    }
    // console.log(data,confirm);

    if (newPassword === confirm) {
      console.log(data, confirm)

      fetch(
        `https://project-khulna-backend-thebrightfuture.vercel.app/changePassword`,
        {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      )
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            setChangePassword(false)
            user['password'] = newPassword
            localStorage.setItem('user', JSON.stringify(user))
            console.log(user, 'from local')
            form.reset()
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `Changed Password`,
              showConfirmButton: false,
              timer: 1500,
            })
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: result.error,
            })
          }
        })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Dind not match password',
      })
    }
  }
  return (
    <div>
      {!isAdmin ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 bg-gray-600 rounded p-5">
          <div>
            <img src={image} alt="userImage" className="m-auto w-40 mt-3" />
            <h3 className="text-center text-xl font-bold text-white mt-2">
              {name}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full justify-items-start m-auto">
            <div>
              <h4 className="text-lg font-semibold text-white">Email</h4>
              <span className="text-slate-400">{email}</span>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Phone</h4>
              <p className="text-slate-400">{phone}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Your Club</h4>
              <p className="text-slate-400">{club}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Sponsor id</h4>
              <p className="text-slate-400">{sponsorID}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">User ID</h4>
              <p className="text-slate-400">{userID}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Balance</h4>
              <p className="text-slate-400">{balance}</p>
            </div>
          </div>
          <div>
            <form
              onSubmit={handlePassworChange}
              className="flex flex-col  gap-2 w-2/3"
            >
              {changePassword && (
                <>
                  <input
                    className="px-3 py-1 bg-white text-black rounded"
                    type="password"
                    placeholder="Current Password"
                    name="currentPassword"
                    id=""
                  />
                  <input
                    className="px-3 py-1 bg-white text-black rounded"
                    type="password"
                    placeholder="New Password"
                    name="newPassword"
                    id=""
                  />
                  <input
                    className="px-3 py-1 bg-white text-black rounded"
                    type="password"
                    placeholder="Confirm Password"
                    name="confirm"
                    id=""
                  />
                </>
              )}
              {!changePassword ? (
                <div className="lg:mt-28">
                  <button
                    onClick={() => setChangePassword(true)}
                    className="px-5 py-2 rounded text-black hover:bg-teal-800 bg-teal-500 mt-5"
                  >
                    Change Password
                  </button>
                </div>
              ) : (
                <input
                  className="px-5 py-2 rounded text-black hover:bg-teal-800 bg-teal-500 mt-5"
                  type="submit"
                  value="Save Password"
                />
              )}
            </form>
          </div>
        </div>
      ) : (
        <AdminProfile></AdminProfile>
      )}
    </div>
  )
}

export default PasswordChange
