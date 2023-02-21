import { useEffect, useState } from 'react'
import Modal from './Modal/Modal'

const TotalUser = () => {
  const [uData, setData] = useState([])
  useEffect(() => {
    fetch('https://project-khulna-backend-thebrightfuture.vercel.app/allUser')
      .then((res) => res.json())
      .then((data) => setData(data))
  })

  const [search, setSearch] = useState('')

  const [findData, setFindData] = useState()
  const [getId, setGetId] = useState()
  let b = parseInt(findData)
  let a = uData[getId]

  const hadnelDiposite = (id) => {
    console.log(id, 'userId')
  }

  // console.log(findData,"findD")

  return (
    <div className="container  md:w-[80%] w-[96%] mx-auto py-2 capitalize">
      {/* header sm */}

      <header className="lg:flex justify-between">
        <h4 className="text-[22px] mt-3 font-[700] ">Total User</h4>
        <input
          type="text"
          onChange={(event) =>
            setSearch(event.target.value.toLocaleLowerCase())
          }
          className="h-[37px] rounded-md text-white font-semibold p-4 bg-[#272b33] outline-none my-3"
          placeholder="Search user"
        />
      </header>
      <hr className="w-full mt-2 border-[2px]  border-slate-600" />
      {/* total user table */}
      <div className="overflow-x-auto">
        <table className="table table-compact w-full mt-5">
          <thead>
            <tr className="text-white">
              <th className="bg-[#343946] py-3 p-5">user ID</th>
              <th className="bg-[#343946] py-3">user name</th>
              <th className="bg-[#343946] py-3">amount</th>
              <th className="bg-[#343946] py-3">email</th>
              <th className="bg-[#343946] py-3">password</th>
              <th className="bg-[#343946] rounded-tr-md py-3">action</th>
            </tr>
          </thead>
          <tbody>
            {uData
              ?.filter((item) => {
                return search.toLocaleLowerCase() === ''
                  ? item
                  : item.userID.toLocaleLowerCase().includes(search)
              })
              .map((user) => (
                <tr key={user.id} className="border-b border-[#8080805f]">
                  <td className="bg-[#282936] pl-5 text-[#A8A9AE] py-3 rounded-none border-b border-[#8080805f]">
                    {user.userID}
                  </td>
                  <td className="bg-[#282936] text-[#A8A9AE] py-3 rounded-none border-b border-[#8080805f]">
                    {user.name}
                  </td>
                  <td className="bg-[#282936] text-[#A8A9AE] py-3 rounded-none border-b border-[#8080805f]">
                    {user.balance}
                  </td>
                  <td className="bg-[#282936] text-[#A8A9AE] py-3 rounded-none border-b border-[#8080805f]">
                    {user.email}
                  </td>
                  <td className="bg-[#282936] text-[#A8A9AE] py-3 rounded-none border-b border-[#8080805f]">
                    {user.password}
                  </td>
                  <td className="bg-[#282936] text-[#A8A9AE] py-3 rounded-none border-b border-[#8080805f]">
                    <button className="px-3 py-2 rounded-md text-white bg-[#008080]">
                      <label
                        hadnelDiposite={() => hadnelDiposite(user)}
                        htmlFor={user._id}
                        className="cursor-pointer"
                      >
                        Deposit
                      </label>
                    </button>
                  </td>
                  <Modal
                    key={user._id}
                    setGetId={setGetId}
                    setFindData={setFindData}
                    user={user}
                  ></Modal>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TotalUser
