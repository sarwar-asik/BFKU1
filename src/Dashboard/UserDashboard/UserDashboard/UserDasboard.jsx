import React from 'react'
import { Link } from 'react-router-dom'
import StatementImg from '../../../Assctes/Statement.png'
import Finance from '../../../Assctes/Finance.png'
import Sponsors from '../../../Assctes/Sponsors.png'

const userDashboardItems = [
  {
    title: 'Statement',
    icon: StatementImg,
    link: '/user/dashboard/statement',
  },
  {
    title: 'Finance',
    icon: Finance,
    link: '/user/dashboard/finance',
  },
  {
    title: 'Sponsors',
    icon: Sponsors,
    link: '/user/dashboard/allsponsor',
  },
]

const UserDasboard = () => {
  return (
    <section className="p-4 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto w-full gap-6 justify-center  md:my-24">
        {userDashboardItems.map((item) => {
          return (
            <Link key={item.title} to={item.link}>
              <div className="card  bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                  <div>
                    <img
                      src={item?.icon}
                      alt="Statements"
                      className="w-20 h-20 "
                    />
                  </div>
                  <p className="text-xl font-semibold text-white">
                    {item?.title}
                  </p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default UserDasboard
