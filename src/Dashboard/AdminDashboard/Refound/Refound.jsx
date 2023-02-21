import { CheckIcon } from '@heroicons/react/24/outline'
import { PaperAirplaneIcon, PencilSquareIcon } from '@heroicons/react/24/solid'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../Context/UserContext'
import RefoundModal from './RefoundModal/RefoundModal'

const Refound = () => {
  const {allChecket ,setAllChecket} = useContext(AuthContext);

  const [uData, setUData] = useState([]);
  useEffect(()=>{
    
  const uData = [
    {
      id: 0,
      user_id: '@27ns45',
      time: '10:33',
      date: '2/6/2023',
      amount: 4000,
      email: 'mnoen0@4shared.com',
      rate: 5.1,
      isChecked :  false
    },
    {
      id: 1,
      user_id: '@27ns46',
      time: '10:34',
      date: '2/6/2023',
      amount: 4000,
      email: 'mnoen0@4shared.com',
      rate: 5.1,
      isChecked :  false
    },
  ];

  
  
    setUData(uData.map((d)=>{
    return {"select" : false, id : d.id, user_id : d.user_id,
     time : d.time, date : d.date, amount:d.amount, 
     email : d.email, rate : d.rate}
  }));
  },[])
  const [findData, setFindData] = useState()
  const [getId, setGetId] = useState()
  let b = parseInt(findData);
  let a = uData[getId];



  //this is a post mathod
  console.log("sponsor amount", a?.amount - b)

  return (
    <div className="container  md:w-[80%] w-[96%] mx-auto py-2 capitalize">
      {/* header sm */}
      <div className="md:flex justify-between items-center border-b border-[#8080804b] pb-2">
        <h1>Refound</h1>
      </div>
      {/* total user table */}
      <div className="overflow-x-auto">
        <table className="table table-compact w-full mt-5">
          <thead>
            <tr>
              <th className="bg-[#343946] py-3"><input onChange={(e)=>{
                let checked = e.target.checked;
                setUData(uData.map((d)=>{
                  d.select = checked;
                  return d
                }));
              }} type="checkbox" /></th>
              <th className="bg-[#343946] py-3">user ID</th>
              <th className="bg-[#343946] py-3">Bet Amount</th>
              <th className="bg-[#343946] py-3">date</th>
              <th className="bg-[#343946] py-3">time</th>
              <th className="bg-[#343946] py-3">email</th>
              <th className="bg-[#343946] py-3">rate</th>
              <th className="bg-[#343946] rounded-tr-md py-3">action</th>
            </tr>
          </thead>
          <tbody className="">
            {uData.map((user) => (
              <tr key={user.id} className="border-b border-[#8080805f]">
                <td className="bg-[#282936] text-[#A8A9AE] py-3 rounded-none border-b border-[#8080805f]">
                   <input onChange={(e)=>{
                      let checked =  e.target.checked;

                      setUData(
                        uData.map((data)=>{
                        if(user.id === data.id){
                          data.select = checked;
                        }
                        return data;
                      }))
                   }} type="checkbox" checked={user.select} />
                </td>
                <td className="bg-[#282936] text-[#A8A9AE] py-3 rounded-none border-b border-[#8080805f]">
                  {user.id}
                </td>
                <td className="bg-[#282936] text-[#A8A9AE] py-3 rounded-none border-b border-[#8080805f]">
                  {' '}
                  {user.amount}
                </td>
                <td className="bg-[#282936] text-[#A8A9AE] py-3 rounded-none border-b border-[#8080805f]">
                  {user.date}
                </td>
                <td className="bg-[#282936] text-[#A8A9AE] py-3 rounded-none border-b border-[#8080805f]">
                  {user.time}
                </td>
                <td className="bg-[#282936] text-[#A8A9AE] py-3 rounded-none border-b border-[#8080805f]">
                  {user.email}
                </td>
                <td className="bg-[#282936] text-[#A8A9AE] py-3 rounded-none border-b border-[#8080805f]">
                  {user.rate}
                </td>
                <td className="bg-[#282936] text-[#A8A9AE] py-3 rounded-none border-b border-[#8080805f]">
                  <button className="px-3 py-2 rounded-md text-white bg-[#008080]">
                    <label htmlFor={user.id} className="cursor-pointer">
                      Send
                    </label>
                  </button>
                </td>
                <RefoundModal
                  key={user.id}
                  setGetId={setGetId}
                  setFindData={setFindData}
                  user={user}
                ></RefoundModal>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Refound
