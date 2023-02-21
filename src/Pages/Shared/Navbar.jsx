/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import { Link } from "react-router-dom";
import { FaChartPie, FaPowerOff } from "react-icons/fa";
import LogoImg from "../../Assctes/logo.png";
import useAdmin from "../../Hooks/useAdmin";
import useSubAdmin from "../../Hooks/useSubAdmin";
import useUser from "../../Hooks/useUser";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, databaseUser, balance, setBalance } = useContext(
    AuthContext
  );
  const [isAdmin] = useAdmin(user?.email);
  const [isSubAdmin] = useSubAdmin(user?.email);
  const [isUser] = useUser(user?.email);

  const menu = (
    <>
      <li>
        {!user ? (
          <Link
            to="/login"
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
            aria-label="Login"
            title="Login"
          >
            Login
          </Link>
        ) : (
          <div className="flex justify-center lg:block">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-8 h-8 rounded-full flex justify-center items-center text-xl font-semibold ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800">
                  {/* {user?.displayName[0] || ""} */}
                  {/* {user?.displayName[0]} */}
                  {(user.name ?? [])[0]}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-500 rounded-box w-52"
              >
                <li>
                  {isAdmin && (
                    <>
                      <Link to="/admin/dashboard">
                        <FaChartPie></FaChartPie>
                        Dashboard
                      </Link>
                    </>
                  )}

                  {isSubAdmin && (
                    <>
                      <Link to="/user/dashboard">
                        <FaChartPie></FaChartPie>
                        Dashboard
                      </Link>
                    </>
                  )}

                  {isUser && (
                    <>
                      <Link to="/user/dashboard/userprofile">
                        <CgProfile></CgProfile> User Profile
                      </Link>
                      <Link to="/user/dashboard">
                        <FaChartPie></FaChartPie>
                        Dashboard
                      </Link>
                    </>
                  )}
                </li>

                <li>
                  <button onClick={() => logout()}>
                    <FaPowerOff></FaPowerOff>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </li>
    </>
  );

  return (
    <header className="bg-gray-900">
      <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative z-50 flex items-center justify-between ">
          <Link
            to="/"
            aria-label="Fcwin4"
            title="Fcwin4"
            className="inline-flex items-center"
          >
            <img src={LogoImg} alt="logo" className="h-14" />
          </Link>
          <ul className=" items-center  space-x-8 lg:flex text-white">
            <div className="flex items-center">
              {user && isUser && (
                <span className="mr-5 border text-[#8c32dc] border-[#8c32dc] px-2 h-[30px] flex items-center justify-center rounded-full">
                  <p className="text-[24px] mb-2 mr-1">৳</p>{" "}
                  {balance.balance || 0}
                </span>
              )}
              <span> {menu} </span>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
