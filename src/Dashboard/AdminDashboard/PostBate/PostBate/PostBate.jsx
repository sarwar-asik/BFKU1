import React from 'react'
import { Outlet } from 'react-router-dom'

const PostBate = () => {
  return (
    <section>
      <div className="px-4 mt-6  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 ">
        <header className="text-2xl py-2 text-center px-3 rounded font-bold bg-[#008080] text-white font-serif">
          📰 Post Bate
        </header>
        <Outlet></Outlet>
      </div>
    </section>
  )
}

export default PostBate
