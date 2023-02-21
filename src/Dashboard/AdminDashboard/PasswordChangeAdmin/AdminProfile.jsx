import React, { useContext, useState } from 'react'
import image from '../../../Assctes/adminDashbordIcon/adminProfile.png'
import { AuthContext } from '../../../Context/UserContext'
import { MdOutlineVerified } from 'react-icons/md'
import Swal from 'sweetalert2'

const AdminProfile = () => {
  const [changePassword, setChangePassword] = useState(false)
  const { user } = useContext(AuthContext)
  const { name, email, phone } = user

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
    <div className="grid grid-cols-1 lg:grid-cols-3 bg-gray-600 rounded p-5">
      <div>
        <img src={image} alt="userImage" className="m-auto w-40 mt-3" />
        <div className="flex items-center justify-center">
          <h3 className="text-center flex gap-2 items-center text-xl font-bold text-white mt-2 ml-2">
            {name} <MdOutlineVerified></MdOutlineVerified>
          </h3>
        </div>
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
      </div>
      <div>
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
    </div>
  )
}

export default AdminProfile
