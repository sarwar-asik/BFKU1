import React from "react";
import { Link } from "react-router-dom";
import image from "../../../Assctes/adminDashbordIcon/totalUser.png";

const PasswordChange = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 bg-gray-600 rounded p-5">
      <div className="w-full">
        <img src={image} alt="userImage" className="m-auto w-40 mt-3" />
        <h3 className="text-center text-xl font-bold text-white mt-2">
          User Name
        </h3>
        <p className="text-slate-400 text-center">User ID: @example.com</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full mt-3">
        <div>
          <h4 className="text-lg font-semibold text-white">Email</h4>
          <span className="text-slate-400">userexamp@example.com</span>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">Phone</h4>
          <p className="text-slate-400">+880173344556</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">Selected Club</h4>
          <p className="text-slate-400">club name</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">Sponsor user id</h4>
          <p className="text-slate-400">SponsorUserId</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">User ID</h4>
          <p className="text-slate-400">@example.com</p>
        </div>
      </div>
      <form className="mt-3">
        <input
          type="text"
          placeholder="Old password"
          className="input input-bordered w-full max-w-xs bg-gray-600 mb-3 border-green-300"
        />
        <input
          type="text"
          placeholder="New password"
          className="input input-bordered w-full max-w-xs bg-gray-600 mb-3 border-green-300"
        />
        <input
          type="text"
          placeholder="Confirm password"
          className="input input-bordered w-full max-w-xs bg-gray-600 border-green-300"
        />
        <Link to="/passwordChange">
          <input
            type="submit"
            value="submit"
            className="btn bg-emerald-400 mt-3 w-full max-w-xs"
          />
        </Link>
      </form>
    </div>
  );
};

export default PasswordChange;
