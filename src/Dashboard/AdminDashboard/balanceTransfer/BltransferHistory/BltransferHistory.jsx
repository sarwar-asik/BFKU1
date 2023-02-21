import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { AuthContext } from '../../../../Context/UserContext'

const BltransferHistory = () => {
  const { balance, setBalance } = useContext(AuthContext)
  const [search, setSearch] = useState('')
  const [refresh, setRefresh] = useState(null)

  const [deposits, setDeposit] = useState([])

  useEffect(() => {
    fetch(
      `https://project-khulna-backend-thebrightfuture.vercel.app/blTransffer`,
    )
      .then((resp) => resp.json())
      .then((data) => {
        setDeposit(data)
      })
  }, [refresh])

  const addTransation = (data) => {
    fetch(
      `https://project-khulna-backend-thebrightfuture.vercel.app/addblTransffer`,
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
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Verified ${data.name} `,
            showConfirmButton: false,
            timer: 1500,
          })
          setBalance(balance)

          setRefresh(!refresh)
        } else if (result.error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: result.error,
            footer: '<a href="">Delete the transition</a>',
          })
        }
      })
  }

  const deleteTransition = (data) => {
    fetch(
      `https://project-khulna-backend-thebrightfuture.vercel.app/deleteblTransffer`,
      {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result, 'result')
        Swal.fire({
          icon: 'error',
          title: 'Deleted',
          text: 'Deleted',
          footer: `<a href="">Deleted the ${data?.name}</a>`,
        })
        setRefresh(!refresh)
      })
  }

  return (
    <main className="w-[90%] mx-auto mt-3 ">
      <header className="lg:flex justify-between">
        <h4 className="text-[19px] font-[700] ">Transfer Balance</h4>
        <input
          onChange={(event) => setSearch(event.target.value)}
          type="number"
          className="h-[37px] rounded-md text-white font-semibold pl-7 bg-[#272b33] outline-none"
          placeholder="Search Transfer"
        />
      </header>
      <hr className="w-full mt-2 border-[2px]  border-slate-600" />

      <div className="overflow-x-auto">
        <table className="table table-compact w-full mt-4">
          <thead className="bg-[#343946]  text-[16px] font-[700]">
            <tr className="">
              <th>From UID</th>
              <th>Time</th>

              <th>Sender Email</th>
              <th>TO UID</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {deposits
              .filter((item) => {
                return search === ''
                  ? item
                  : (item.userId || item.uid).toString().includes(search)
              })
              .sort((a, b) => {
                return new Date(b.time) - new Date(a.time)
              })
              ?.map((transfer) => {
                const {
                  name,
                  amount,
                  uid,
                  toUid,
                  user,
                  time,
                  status,
                } = transfer
                return (
                  <tr className=" bg-[#757575]">
                    <td>{uid}</td>
                    <td>{time}</td>
                    <td className="text-[16px]">{user}</td>
                    <td>{toUid}</td>
                    <td>{amount}</td>
                    <td className="text-white">
                      {name === 'balanceTransfer' && status === false ? (
                        <div className="">
                          <button
                            onClick={() => addTransation(transfer)}
                            className="bg-[#008080] px-4"
                          >
                            ✔
                          </button>
                          <button
                            onClick={() => deleteTransition(transfer)}
                            className="bg-red-400 px-4"
                          >
                            ✖
                          </button>
                        </div>
                      ) : (
                        <span>success</span>
                      )}
                    </td>
                  </tr>
                )
              })}
          </tbody>
          <tfoot>
            <tr className="bg-[#343946] h-[30px]">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </main>
  )
}

export default BltransferHistory
