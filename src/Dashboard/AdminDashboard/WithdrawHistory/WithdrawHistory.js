import React, { useEffect, useState } from 'react'

const WithdrawHistory = () => {
  const [withdraws, setWithdraws] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    fetch(`https://project-khulna-backend-thebrightfuture.vercel.app/withdraw`)
      .then((resp) => resp.json())
      .then((data) => {
        setWithdraws(data)
      })
  }, [])
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    if (withdraws.length === 0) {
      return
    }

    const amount = withdraws.reduce(
      (total, item) => parseFloat(total) + parseFloat(item.amount),
      0,
    )
    console.log(amount, 'ammount')
    setTotalAmount((prevTotal) => prevTotal + amount)
  }, [withdraws])

  return (
    <main className="w-[90%] mx-auto mt-3">
      <header className="lg:flex justify-between">
        <h4 className="text-[19px] font-[700] ">WithDraw History</h4>
        <input
          onChange={(event) => setSearch(event.target.value)}
          type="number"
          className="h-[37px] rounded-md text-white font-semibold pl-7 bg-[#272b33] outline-none"
          placeholder="Search withdraw"
        />
      </header>
      <hr className="w-full mt-2 border-[2px]  border-slate-600" />
      <div className="overflow-x-auto">
        <table className="table table-compact w-full mt-4">
          <thead className="bg-[#343946]  text-[16px] font-[700]">
            <tr className="">
              <th>Throught</th>
              <th>Time</th>
              <th>User ID</th>
              <th>Status</th>
              <th>Phone</th>
              <th>amount</th>
            </tr>
          </thead>
          <tbody>
            {withdraws
              .filter((item) => {
                return search === ''
                  ? item
                  : item.uid.toString().includes(search)
              })
              ?.map((withdra) => {
                const { method, userId, number, amount, time } = withdra
                return (
                  <tr className=" bg-[#757575]">
                    <td className="text-[16px]">
                      {method || withdra?.throught}
                    </td>
                    <td>{time}</td>
                    <td>{userId || withdra?.uid}</td>
                    <td>{withdra?.status === false ? 'pending' : 'success'}</td>
                    <td>+880{number || withdra.phone}</td>
                    <td>{amount}</td>
                  </tr>
                )
              })}
          </tbody>
          <tfoot>
            <tr className="bg-[#343946] h-[30px]">
              <td>Total Amount</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>{totalAmount}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </main>
  )
}

export default WithdrawHistory
