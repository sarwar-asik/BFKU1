import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid'
import Swal from 'sweetalert2'

const Register = () => {
  const [error, setError] = React.useState(false)
  const [totalClubs, setTotalClubs] = useState([])
  const navigate = useNavigate()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    fetch(
      'https://project-khulna-backend-thebrightfuture.vercel.app/totalCLubs',
    )
      .then((res) => res.json())
      .then((data) => {
        setTotalClubs(data)
      })
  }, [])

  console.log(totalClubs, '++++')

  const handelEmailSignUp = (data) => {
    const {
      email,
      password,
      name,
      userID,
      sponsorID,
      club,
      phone,
      confirmPassword,
    } = data

    const role = 'user'
    const balance = 0

    const user = {
      email,
      password,
      name,
      userID,
      sponsorID,
      club,
      phone,
      role,
      balance,
      sponsor: [],
    }

    if (password !== confirmPassword) {
      setError(true)
      return
    } else {
      setError(false)
      fetch('https://project-khulna-backend-thebrightfuture.vercel.app/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          Swal.fire('রেজিষ্টেশন সম্পন্ন হয়েছে', ' ', 'success')
          navigate('/login')
        })

        .catch((er) => {
          Swal.fire(
            'দয়া করে আবার চেষ্টা করুন',
            'এই ইউজার নেইম আগেও ব্যাবহার করা হয়েছে',
            'info',
          )
        })
    }

    fetch(
      `https://project-khulna-backend-thebrightfuture.vercel.app/sponsor/${sponsorID}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }

  return (
    <section className="md:px-4 px-2">
      <div className=" bg-cover shadow-lg md:pb-0 pb-4 shadow-gray-800/70 bg-[#2c2c2e] rounded-xl mt-5 md:grid grid-cols-3  overflow-hidden">
        <div className="p-4 w-[] h-[100%] md:flex hidden justify-center items-center bg-[#25272f]">
          <div className="">
            <p className="text-center text-white text-lg">
              If you have created an account
            </p>
            {/* If you did not create a new account. */}

            <Link
              to="/login"
              className="bg-[#ff006f0f] border mx-auto mt-4 w-[150px] hover:bg-[#ff006f] duration-200 hover:text-white hover:shadow-lg hover:shadow-red-800/40 border-[#ff006f]  rounded-lg flex items-center text-[#ff006f] px-8 py-2"
            >
              <ArrowLeftOnRectangleIcon className="w-6 mr-3"></ArrowLeftOnRectangleIcon>{' '}
              Login
            </Link>
          </div>
        </div>

        <div className=" w-full p-2 col-span-2">
          <form
            className="text-white w-full px-3 pb-3 md:pt-2 pt-1 rounded-lg mx-auto"
            onSubmit={handleSubmit(handelEmailSignUp)}
          >
            <h1 className="font-bold md:text-2xl text-[#5a5afc] text-center text-2xl">
              Sign Up
            </h1>
            <div className="md:flex gap-2 items-center md:mt-5 mt-4">
              <input
                type="text"
                placeholder="Enter your name"
                {...register('name', { required: true })}
                className="  px-2 py-2 rounded-lg duration-200  w-full bg-[#d6dde70e] border-2 placeholder:text-gray-200 text-gray-200 border-[#9198f7]"
              />

              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}

              <input
                type="email"
                required
                placeholder="Enter your email"
                {...register('email', { required: true })}
                className="  px-2 py-2 rounded-lg duration-200  w-full bg-[#d6dde70e] border-2 placeholder:text-gray-200 text-gray-200 md:mt-0 mt-4 border-[#9198f7]"
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="md:flex gap-2 items-center md:mt-5 mt-4">
              <input
                type="tel"
                required
                placeholder="Enter your phone number"
                {...register('phone', { required: true })}
                className="  px-2 py-2 rounded-lg duration-200  w-full bg-[#d6dde70e] border-2 placeholder:text-gray-200 text-gray-200 border-[#9198f7]"
              />
              {errors.phone && (
                <span className="text-red-500">This field is required</span>
              )}

              <input
                type="text"
                required
                placeholder="Enter your userID"
                {...register('userID', { required: true })}
                className="md:mt-0 mt-4  px-2 py-2 rounded-lg duration-200  w-full bg-[#d6dde70e] border-2 placeholder:text-gray-200 text-gray-200 border-[#9198f7]"
              />
              {errors.userID && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className=" gap-2 items-center md:mt-5 ">
              <input
                type="text"
                placeholder="Enter your sponsor id"
                {...register('sponsorID')}
                className=" md:mt-0 mt-4 px-2 py-2 rounded-lg duration-200  w-full bg-[#d6dde70e] border-2 placeholder:text-gray-200 text-gray-200 border-[#9198f7]"
              />

              <select
                id="countries"
                className="  px-2 py-2 rounded-lg duration-200 mt-4 w-full bg-[#d6dde70e] border-2 border-[#9198f7]"
                {...register('club')}
              >
                {totalClubs.map((club) => {
                  return (
                    <option
                      className="bg-gray-700 px-2 py-3 cursor-pointer"
                      key={club._id * 2}
                    >
                      {club.name}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className="md:flex gap-2 items-center  mt-4">
              <input
                type="password"
                required
                placeholder="Enter your password"
                {...register('password', { required: true })}
                className="  px-2 py-2 rounded-lg duration-200  w-full bg-[#d6dde70e] border-2 placeholder:text-gray-200 text-gray-200 border-[#9198f7]"
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}

              <input
                type="password"
                required
                placeholder="Enter your confirm password"
                {...register('confirmPassword', { required: true })}
                className=" md:mt-0 mt-4 px-2 py-2 rounded-lg duration-200  w-full bg-[#d6dde70e] border-2 placeholder:text-gray-200 text-gray-200 border-[#9198f7]"
              />
              {errors.confirmPassword && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div>
              {error && (
                <p className="text-red-600 ">
                  Password not match Please Try Again
                </p>
              )}
            </div>
            <p className="mt-4 text-[14px] md:hidden block">
              If you have created an account ?{' '}
              <Link to="/login" className="text-blue-600 cursor-pointer">
                login
              </Link>
            </p>

            <div className="flex justify-between items-center">
              <input
                type="submit"
                value="Sign Up"
                className="bg-blue-700 text-white px-8 py-2 cursor-pointer rounded-md mt-4"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register
