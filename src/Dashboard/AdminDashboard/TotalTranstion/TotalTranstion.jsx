import React from "react";
import { Link } from "react-router-dom";
import deposit from "../../../Assctes/adminDashbordIcon/deposit.png";
import withdraw from "../../../Assctes/adminDashbordIcon/withdraw.png";
import transaction from "../../../Assctes/adminDashbordIcon/transaction.png";

const TotalTranstion = () => {
  let links = [
    {
      link: "/admin/dashboard/totalWidrowBalance",
      name: "Total Widrow",
      icon: withdraw,
    },

    {
      link: "/admin/dashboard/totalDeposit",
      name: "Total Deposit",
      icon: deposit,
    },
    {
      id: 10,
      link: "/admin/dashboard/balanceTransferred",
      name: "Balanced Transferred",
      quantity: "",
      icon: transaction,
    },
  ];

  return (
    <section>
      <div className="md:grid md:grid-cols-2 w-2/3 mx-auto md:justify-center gap-4 mt-5 md:items-center ">
        {links.map((lk) => (
          <Link
            to={lk.link}
            className="flex items-center rounded-lg bg-[#1c2026] px-3 py-3 shadow-md duration-300 hover:shadow-gray-700/70 mt-3 md:mt-0"
          >
            <div className="bg-[#191720f9] mr-3 rounded-lg p-2">
              <img src={lk.icon} className="w-11 " alt="" />
            </div>
            <div className="text-white">
              <h3 className="capitalize">{lk.name}</h3>
              <h1 className="font-[600] text-2xl text-[#ff2841]">
                {lk.quantity}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TotalTranstion;
