import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
// import { serverApi } from "../../../Pages/Shared/serverApi/serverApi";

const AddClub = () => {
  // const [photos, setPhoto] = useState("");
  const navigate = useNavigate()

  const handleClubAdd = (event) => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const userID = form.userID.value
    const photo = form.photo.files[0]

    const formData = new FormData()
    formData.append('image', photo)
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=67d84a709df3d1fecb8a6529b709dac5`
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        console.log(imageData.data.url, 'imageData')
        const image = imageData.data.url
        const clubData = {
          name,
          clubId: userID,
          img: image,
        }
        postClubData(clubData, form)
      })
  }

  const postClubData = (clubData, form) => {
    fetch(`https://project-khulna-backend-thebrightfuture.vercel.app/addclub`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(clubData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        Swal.fire('Club Added Successfully', ' ', 'success')
        navigate('/admin/dashboard/totalClube')
        form.reset()
      })
    console.log(clubData, 'and ')
  }

  return (
    <section className="mt-3 w-[90%] mx-auto  ">
      <h1 className="text-2xl py-3 text-center px-3 font-bold bg-[#008080] text-white rounded">
        Add a Club{' '}
      </h1>

      <form onSubmit={handleClubAdd} action="" className="p-5 shadow-xl">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-7 ">
          <div className="form-control my-2">
            <label htmlFor="name" className="text-xl font-semibold ">
              Club Name
            </label>
            <input
              name="name"
              type="text"
              className="bg-[#EEEEEE]  py-3 outline-none rounded w-full mt-3 text-slate-600 px-2 "
            />
          </div>
          <div className="form-control my-2">
            <label htmlFor="userID" className="text-xl font-semibold ">
              Add User ID
            </label>
            <input
              name="userID"
              type="text"
              className="bg-[#EEEEEE]  py-3 outline-none rounded w-full mt-3 text-slate-600 px-2 "
            />
          </div>
          <div className="form-control my-2">
            <label htmlFor="photo" className="text-xl font-semibold ">
              Add Club Photo
            </label>
            <input
              name="photo"
              type="file"
              className="bg-[#EEEEEE]  py-2 outline-none rounded w-full mt-3 text-slate-600 px-2 "
            />
          </div>
        </section>
        <div className=" mt-2 mx-auto text-center">
          <input
            type="submit"
            className="py-2 w-32  rounded  mt-2 bg-[#008080] px-2 text-white font-bold text-2xl font-serif  cursor-pointer"
          />
        </div>
      </form>
    </section>
  )
}

export default AddClub
