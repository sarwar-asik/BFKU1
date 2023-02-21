import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../Context/UserContext'
import Swal from 'sweetalert2'

const Login = () => {
  const { handleSubmit, register } = useForm()

  const location = useLocation()
  const navigate = useNavigate()

  const from = location?.state?.from?.pathname || '/'

  const { setUser, setUserInLocalStorage } = useContext(AuthContext)

  const handeluidSignIn = (data) => {
    fetch(
      'https://project-khulna-backend-thebrightfuture.vercel.app/findUser',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message)
        if (data.message === 'Password is incorrect') {
          Swal.fire(
            'আপনার পাসওয়ার্ডটি সঠিক নয়',
            'দয়াকরে য়াবার চেষ্টা করুন',
            'info',
          )
        } else if (data.message === 'User find successful') {
          navigate('/')
          Swal.fire('Login successful', '', 'success')
          setUser(data.data)
          setUserInLocalStorage(data.data)
          // saveUserToLocalStorage(data.data)
        } else if (data.message === 'User not found') {
          Swal.fire(
            'দুঃখিত আমরা এই ইউজার নেইম যুক্ত কোন আইড়ি খুজে পাই নি',
            '',
            'error',
          )
        }
      })
  }

  return (
    <section className="md:px-4 px-2">
      <div className=" bg-cover shadow-lg shadow-gray-800/70 md:bg-[#2c2c2e] rounded-xl mt-5 md:grid grid-cols-2  overflow-hidden">
        <div className="p-4 w-[] h-[100%] md:flex hidden justify-center items-center bg-[#25272f] ">
          <div className="">
            <p className="text-center text-white text-lg">
              If you did not create a new account
            </p>

            <Link
              to="/register"
              className="bg-[#ff006f0f] w-[160px] border mx-auto mt-4 hover:bg-[#ff006f] duration-200 hover:text-white hover:shadow-lg hover:shadow-red-800/40 border-[#ff006f]  rounded-lg flex items-center text-[#ff006f] px-8 py-2"
            >
              <ArrowLeftOnRectangleIcon className="w-6 mr-3"></ArrowLeftOnRectangleIcon>{' '}
              Sign Up
            </Link>
          </div>
        </div>

        <div className=" w-full p-2 ">
          <form
            onSubmit={handleSubmit(handeluidSignIn)}
            className="text-white w-full h-[400px] bg-[#1b1f2c] px-3 pb-3 md:pt-2 pt-1 rounded-lg mx-auto"
          >
            <h1 className="font-bold text-2xl mt-12 text-[#5a5afc] text-center">
              Login
            </h1>
            <input
              type="text"
              placeholder="Enter your userID"
              {...register('uid', {
                required: 'uid is required',
              })}
              className="  px-2 py-3  mt-5 rounded-lg duration-200  w-full bg-[#d6dde70e] border-2 placeholder:text-gray-200 text-gray-200 border-[#9198f7]"
            />

            <input
              type="password"
              required
              placeholder="Enter your password"
              {...register('password', {
                required: 'Password is required',
              })}
              className="  px-2 py-3  rounded-lg duration-200  w-full bg-[#d6dde70e] border-2 placeholder:text-gray-200 text-gray-200 mt-8 border-[#9198f7]"
            />

            <p className="mt-8 md:hidden block text-[14px]">
              If you did not create a new account ?{' '}
              <Link to="/register" className="text-blue-600 cursor-pointer">
                Sign Up
              </Link>
            </p>
            <div className="flex md:mt-3 justify-between items-center">
              <input
                type="submit"
                value="Login"
                className="bg-blue-700 text-white px-8 py-2 cursor-pointer rounded-md mt-4"
              />

              <p className="text-gray-200 cursor-pointer">Forget Password</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
