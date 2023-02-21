import React, { useEffect, useState } from 'react'
// import clubImg from "../../../../Assctes/sarwar/clubImg.png";
import deleteIcon from '../../../Assctes/icons/deleteIcon.png'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const TotalClub = () => {
  const [clubs, setClubs] = useState([])
  const [refresh, setRefresh] = useState(null)
  const [search, setSearch] = useState('')
  useEffect(() => {
    fetch(
      `https://project-khulna-backend-thebrightfuture.vercel.app/totalClubs`,
    )
      .then((resp) => resp.json())
      .then((data) => {
        setClubs(data)
      })
  }, [refresh])

  const deleteClub = (club) => {
    fetch(
      `https://project-khulna-backend-thebrightfuture.vercel.app/deleteClub`,
      {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(club),
      },
    )
      .then((respon) => respon.json(club))
      .then((data) => {
        console.log(data)
        setRefresh(data)
        toast(`Deleted ${club?.name}`)
      })
  }

  return (
    <main className="w-[90%] mx-auto mt-3">
      <div className="my-6 ">
        <Link to="/admin/dashboard/addClub" className="commonBtn">
          Add Club
        </Link>
      </div>

      <header className="lg:flex justify-between">
        <h4 className="text-[19px] font-[700] ">Total Club</h4>
        <input
          type="text"
          onChange={(event) =>
            setSearch(event.target.value.toLocaleLowerCase())
          }
          className="h-[37px] rounded-md text-white font-semibold pl-7 bg-[#272b33] outline-none"
          placeholder="Search user"
        />
      </header>
      <hr className="w-full mt-2 border-[2px]  border-slate-600" />
      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
        {clubs
          ?.filter((single) => {
            return search.toLocaleLowerCase() === ''
              ? single
              : single.name.toLocaleLowerCase().includes(search)
          })
          ?.map((club) => {
            const { name, img, clubId } = club
            return (
              <div className="h-[72px] w-full  p-2 flex gap-2 bg-[#3E4453] rounded">
                <figure>
                  <img src={img} className="h-[54px] w-[60px] rounded" alt="" />
                </figure>
                <section className="flex justify-between items-center b w-full">
                  <div className="">
                    <h1 className="text-[19px] font-[500] text-white">
                      {name}
                    </h1>
                    <h6>@{clubId}</h6>
                  </div>
                  <button
                    onClick={() => deleteClub(club)}
                    className="bg-[#A32C2C] h-[36px] px-1"
                  >
                    <img src={deleteIcon} alt="" />
                  </button>
                </section>
              </div>
            )
          })}
      </section>
    </main>
  )
}

export default TotalClub
