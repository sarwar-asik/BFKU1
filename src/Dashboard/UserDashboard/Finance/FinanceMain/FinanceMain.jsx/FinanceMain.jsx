import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const FinanceMain = () => {
  const navButtons = [
    {
      name: 'Deposit',
      path: '/user/dashboard/finance',
    },
    {
      name: 'Balance Transfer',
      path: '/user/dashboard/finance/balanceTransfer',
    },
    {
      name: 'WithDraw',
      path: '/user/dashboard/finance/withdraw',
    },
    {
      name: 'Change CLub',
      path: '/user/dashboard/finance/changeClub',
    },
  ]
  return (
    <div className="my-3 container max-w-[90%] mx-auto">
      <header className="text-2xl py-2 px-3 rounded font-bold bg-[#008080] text-white font-serif">
        📰 MY Wallet
      </header>
      <nav className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3 my-2">
        {navButtons?.map((btn) => {
          return (
            <Link
              to={btn.path}
              className="bg-[#008080] text-center text-white px-2 py-2 rounded font-bold"
            >
              {btn.name}
            </Link>
          )
        })}
      </nav>
      <Outlet></Outlet>
    </div>
  )
}

export default FinanceMain
