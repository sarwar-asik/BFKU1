import React from 'react'
import Navbar from '../Pages/Shared/Navbar'
import Footer from '../Pages/Shared/Footer'
import { Outlet } from 'react-router-dom'

const UserDashboardLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        {' '}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  )
}

export default UserDashboardLayout
