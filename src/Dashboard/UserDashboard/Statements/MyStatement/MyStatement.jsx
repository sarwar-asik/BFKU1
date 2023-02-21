import React from 'react'
import { Link } from 'react-router-dom'
import { ClipboardDocumentIcon } from '@heroicons/react/24/solid'

const MyStatement = () => {
  return (
    <div className=" mx-auto mt-3 px-2">
      <h1 className="flex items-center text-xl font-bold text-[#0b7c61]">
        <ClipboardDocumentIcon className="h-6 w-6 mr-2 " /> Statement
      </h1>
      {/* statement buttons group */}
      <div className="grid lg:grid-cols-5 grid-cols-2 gap-3 mt-5 pb-3 border-b  border-[#18866d6f]">
        <Link
          to="/user/dashboard/statement/allBets"
          className=" px-4 py-2 rounded-md text-center bg-[#0b7c61] text-white  md:w-auto m-1 md:text-[16px] text-[11px]"
        >
          All Bets
        </Link>

        <Link
          to="/user/dashboard/statement/allDeposit"
          className="px-4 py-2 rounded-md  text-center  bg-[#0b7c61] text-white md:w-auto m-1 md:text-[16px] text-[11px]"
        >
          All Deposit
        </Link>

        <Link
          to="/user/dashboard/statement/balanceTransfer"
          className="px-4 py-2 rounded-md  text-center  bg-[#0b7c61] text-white md:w-auto m-1 md:text-[16px] text-[11px]"
        >
          Balance Transfer
        </Link>

        <Link
          to="/user/dashboard/statement/withdraw"
          className="px-4 py-2 rounded-md  text-center  bg-[#0b7c61] text-white md:w-auto m-1 md:text-[16px] text-[11px]"
        >
          All WithDrawal
        </Link>

        <Link
          to="/user/dashboard/statement/transactionHistory"
          className="px-4 py-2 rounded-md  text-center  bg-[#0b7c61] text-white md:w-auto m-1 md:text-[16px] text-[11px]"
        >
          Transaction History
        </Link>
      </div>
    </div>
  )
}

export default MyStatement
