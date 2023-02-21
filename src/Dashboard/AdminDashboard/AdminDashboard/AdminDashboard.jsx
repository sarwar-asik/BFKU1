import React from 'react'
import { Link } from 'react-router-dom'
import bate from '../../../Assctes/adminDashbordIcon/bate.png'
import controlar from '../../../Assctes/adminDashbordIcon/controler.png'
import totalUser from '../../../Assctes/adminDashbordIcon/totalUser.png'
import totalUserBalance from '../../../Assctes/adminDashbordIcon/totalBalance.png'
import adminProfile from '../../../Assctes/adminDashbordIcon/adminProfile.png'
import club from '../../../Assctes/adminDashbordIcon/club.png'
import sponcer from '../../../Assctes/adminDashbordIcon/sponcer.png'
import transaction from '../../../Assctes/adminDashbordIcon/transaction.png'
import moderator from '../../../Assctes/adminDashbordIcon/moderator.png'
import banner from '../../../Assctes/adminDashbordIcon/danshboardBanner.jpg'
import setting from '../../../Assctes/adminDashbordIcon/setting.png'
import { useState } from 'react'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

const AdminDashboard = () => {
  const [transition, settransition] = useState([])

  const { data: TotalUser } = useQuery({
    queryKey: ['TotalUser'],
    queryFn: async () => {
      const res = await fetch(
        'https://project-khulna-backend-thebrightfuture.vercel.app/users',
      )
      const data = await res.json()
      return data.data
    },
  })

  const { data: TotalClube } = useQuery({
    queryKey: ['TotalClube'],
    queryFn: async () => {
      const res = await fetch(
        'https://project-khulna-backend-thebrightfuture.vercel.app/totalCLubs',
      )
      const data = await res.json()
      console.log(data.data)
      return data
    },
  })
  console.log(TotalClube)

  useEffect(() => {
    fetch(`https://project-khulna-backend-thebrightfuture.vercel.app/transfer`)
      .then((resp) => resp.json())
      .then((data) => {
        settransition(data)
      })
  }, [])

  let links = [
    {
      id: 0,
      link: '/admin/dashboard/adminProfile',
      name: 'Admin profile',
      quantity: '',
      icon: adminProfile,
    },

    {
      id: 1,
      link: '/admin/dashboard/postBate',
      name: 'Post Bate',
      quantity: '',
      icon: bate,
    },
    {
      id: 2,
      link: '/admin/dashboard/controlar',
      name: 'Controller',
      quantity: '',
      icon: controlar,
    },

    {
      id: 3,
      link: '/admin/dashboard/totalUser',
      name: 'Total User',
      quantity: TotalUser?.length,
      icon: totalUser,
    },
    {
      id: 4,
      link: '/admin/dashboard/balanceTransfer',
      name: 'User Transaction Request',
      quantity: '',
      icon: totalUserBalance,
    },

    {
      id: 6,
      link: '/admin/dashboard/totalSponcer',
      name: 'total sponcer',
      quantity: '',
      icon: sponcer,
    },
    {
      id: 7,
      link: '/admin/dashboard/totalTranstiton',
      name: 'total transaction',
      quantity: transition?.length,
      icon: transaction,
    },
    {
      id: 8,
      link: '/admin/dashboard/postHistory',
      name: 'Post History',
      quantity: '',
      icon: moderator,
    },

    {
      id: 9,
      link: '/admin/dashboard/refound',
      name: 'refund',
      quantity: '',
      icon: moderator,
    },

    {
      id: 0,
      link: '/admin/dashboard/totalClube',
      name: 'Total Club',
      quantity: TotalClube?.length,
      icon: club,
    },
    {
      id: 10,
      link: '/admin/dashboard/setting',
      name: 'Settings',
      quantity: '',
      icon: setting,
    },

    // {
    //   id: 0,
    //   link: "/admin/dashboard/addClub",
    //   name: "Add Club",
    //   icon: club,
    // },
  ]
  return (
    <div className="md:w-[80%] w-[96%] m-auto mt-3">
      {/*  */}
      <div
        style={{
          backgroundImage: ` linear-gradient(90deg, rgba(19,14,113,0.5355392156862745) 0%, rgba(156,0,32,0.5159313725490196) 0%, rgba(2,18,117,0.5971638655462185) 100%, rgba(0,78,255,0.7960434173669468) 100%),url(${banner})`,
          backgroundPosition: 'center',
        }}
        className="md:h-[270px]
            h-[150px] bg-no-repeat bg-cover flex items-center justify-center rounded-xl"
      >
        <h1 className="text-white font-[500] md:text-5xl text-3xl flex items-center">
          {' '}
          Admin Dashboard
        </h1>
      </div>
      <div className="md:grid md:grid-cols-4 mx-auto gap-4 mt-5">
        {links.map((lk) => (
          <Link
            key={lk.id}
            to={lk.link}
            className="flex items-center rounded-lg bg-[#1c2026] px-3 py-3 shadow-md duration-300 hover:shadow-gray-700/70 mt-3 md:mt-0"
          >
            <div className="bg-[#191720f9] mr-3 rounded-lg p-2">
              <img src={lk.icon} className="w-11 rounded-full" alt="" />
            </div>
            <div className="text-white">
              <h3 className="capitalize">{lk.name}</h3>
              <h1 className="font-[600] text-2xl text-[#ff2841]">
                {lk.quantity}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AdminDashboard
