import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import SWAL from 'sweetalert2'

const AddPostBate = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const handlePost = (data) => {
    data['matchValues'] = JSON.parse(data.matchValues)

    console.log(data)

    if (data) {
      SWAL.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, post it!',
      }).then((result) => {
        if (result.isConfirmed) {
          SWAL.fire('Posted!', 'Your post has been posted.', 'success')
        }
      })

      navigate('/admin/dashboard/postBate/setopction', { state: data })
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(handlePost)} className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <label htmlFor="name" className="inline-block mb-1 font-medium">
              First Team Name
            </label>
            <input
              placeholder="Input First Team Name"
              required
              {...register('team1')}
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 font-semibold transition text-white duration-200 bg-gray-500 border border-gray-900 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="name" className="inline-block mb-1 font-medium">
              Second Team Name
            </label>
            <input
              placeholder="Input Second Team Name"
              required
              {...register('team2')}
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 font-semibold transition text-white duration-200 bg-gray-500 border border-gray-900 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="name" className="inline-block mb-1 font-medium">
              Match Date
            </label>
            <input
              placeholder="Provided match time"
              required
              {...register('matchDate')}
              type="date"
              className="flex-grow w-full h-12 px-4 mb-2 font-semibold transition text-white duration-200 bg-gray-500 border border-gray-900 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="name" className="inline-block mb-1 font-medium">
              Match Time
            </label>
            <input
              placeholder="Provided match time"
              required
              {...register('matchTime')}
              type="time"
              className="flex-grow w-full h-12 px-4 mb-2 font-semibold transition text-white duration-200 bg-gray-500 border border-gray-900 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="name" className="inline-block mb-1 font-medium">
              Select Match Catagories
            </label>
            <select
              {...register('matchValues')}
              className="flex-grow w-full h-12 px-4 mb-2 font-semibold transition text-white duration-200 bg-gray-500 border border-gray-900 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
            >
              <option selected>Match values</option>
              <option
                // set image in default value and show it in select option
                value={JSON.stringify({
                  match: 'FootBall',
                  img:
                    'https://raw.githubusercontent.com/Bright-Futute/Accet/main/sp3.png',
                })}
              >
                Foot ball
              </option>
              <option
                value={JSON.stringify({
                  match: 'Cricket',
                  img:
                    'https://raw.githubusercontent.com/Bright-Futute/Accet/main/sp4.png',
                })}
              >
                Cricket
              </option>
              <option
                value={JSON.stringify({
                  match: 'Table Tennis',
                  img:
                    'https://raw.githubusercontent.com/Bright-Futute/Accet/main/sp2.png',
                })}
              >
                Table tennis
              </option>
              <option
                value={JSON.stringify({
                  match: 'Basket Ball',
                  img:
                    'https://raw.githubusercontent.com/Bright-Futute/Accet/main/sp1.png',
                })}
              >
                Basket Ball
              </option>
            </select>
          </div>

          <div>
            <label htmlFor="name" className="inline-block mb-1 font-medium">
              Select Match Status
            </label>
            <select
              {...register('matchStatus')}
              className="flex-grow w-full h-12 px-4 mb-2 font-semibold transition text-white duration-200 bg-gray-500 border border-gray-900 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
            >
              <option disabled selected>
                Game Status
              </option>
              <option>Live</option>
              <option>UpComing</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="name" className="inline-block mb-1 font-medium">
            Provide type of sports
          </label>
          <input
            {...register('matchType')}
            type="text"
            placeholder="Match Type"
            className="flex-grow w-full h-12 px-4 mb-2 font-semibold transition text-white duration-200 bg-gray-500 border border-gray-900 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex justify-center mt-3">
          <input
            type="submit"
            value="submit now"
            className="bg-teal-500 text-white py-2 px-5 rounded hover:bg-teal-300 cursor-pointer"
          />
        </div>
        {/* The button to open modal */}
      </form>
    </>
  )
}

export default AddPostBate
