import React from 'react'

const RefoundModal = ({ user, setFindData, setGetId }) => {
  return (
    <div>
      <input type="checkbox" id={user.id} className="modal-toggle" />
      <div className="modal bg-[#131b20b0]">
        <div className="modal-box md:w-[400px] w-[96%] h-[] py-8">
          <h1 className="text-2xl mt-4 text-center font-bold">
            {' '}
            Refound amount{' '}
          </h1>
          <br />
          <input
            className="mt-1 bg-[#272D42] border-2 border-[#325AC1] w-full py-2 rounded-lg px-2"
            placeholder="Your refound amount"
            type="tell"
            onBlur={(e) => setFindData(e.target.value)}
          />
          <div className="modal-action">
            <label
              onClick={() => setGetId(user.id)}
              htmlFor={user.id}
              className="btn flex items-center w-full bg-[#1d2337] border-none"
            >
              Refound
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RefoundModal
