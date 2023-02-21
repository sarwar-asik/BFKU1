import React, { useEffect, useState } from 'react'

const DepositHistory = () => {
  //   const deposits = [
  //     {
  //       throught: "Bkash",
  //       userId: "11111",
  //       phone: "017222222212",
  //       amount: "3000",
  //     },
  //     {
  //       throught: "Nagad",
  //       userId: "22222",
  //       phone: "017222222212",
  //       amount: "4000",
  //     },
  //     {
  //       throught: "Bkash",
  //       userId: "33333",
  //       phone: "017222222212",
  //       amount: "5000",
  //     },
  //   ]

  const [deposits, setDeposit] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(`https://project-khulna-backend-thebrightfuture.vercel.app/deposit`)
      .then((resp) => resp.json())
      .then((data) => {
        setDeposit(data)
      })
  }, [])

  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    if (deposits.length === 0) {
      return
    }

    const amount = deposits.reduce(
      (total, item) => parseFloat(total) + parseFloat(item.amount),
      0,
    )
    console.log(amount, 'ammount')
    setTotalAmount((prevTotal) => prevTotal + amount)
  }, [deposits])

  return (
    <main className="w-[90%] mx-auto mt-3">
      <header className="lg:flex justify-between">
        <h4 className="text-[19px] font-[700] ">Deposit History</h4>
        <input
          onChange={(event) => setSearch(event.target.value)}
          type="number"
          className="h-[37px] rounded-md text-white font-semibold pl-7 bg-[#272b33] outline-none"
          placeholder="Search Deposit"
        />
      </header>
      <hr className="w-full mt-2 border-[2px]  border-slate-600" />
      <div className="overflow-x-auto">
        <table className="table table-compact w-full mt-4">
          <thead className="bg-[#343946]  text-[16px] font-[700]">
            <tr className="">
              <th>Throught</th>
              <th>User ID</th>
              <th>Status</th>
              <th>TIme</th>
              <th>Phone</th>
              <th>amount</th>
            </tr>
          </thead>
          <tbody>
            {deposits
              .filter((item) => {
                return search === ''
                  ? item
                  : item.uid.toString().includes(search)
              })
              ?.map((depo) => {
                const { method, userId, number, amount, time } = depo
                return (
                  <tr className=" bg-[#757575]">
                    <td className="text-[16px]">{method || depo?.throught}</td>
                    <td>{userId || depo?.uid}</td>
                    <td>{depo?.status === false ? 'pending' : 'success'}</td>
                    <td>{time}</td>
                    <td>+880{number || depo?.phone}</td>
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

export default DepositHistory
