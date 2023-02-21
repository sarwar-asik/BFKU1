import React from "react";
import { useForm } from "react-hook-form";

const UpdatePostBate = () => {
  const { register, handleSubmit } = useForm();
  const handleUpdate = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(handleUpdate)} className="mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <input
          {...register("team1")}
          type="text"
          placeholder="Team name 1"
          className="text-white input input-bordered w-full bg-gray-600 "
        />
        <input
          {...register("team2")}
          type="text"
          placeholder="Team name 2"
          className="text-white input input-bordered w-full bg-gray-600 border-green-300"
        />
        <input
          {...register("matchDate")}
          type="text"
          placeholder="Match date"
          className="text-white input input-bordered w-full bg-gray-600 border-green-300"
        />
        <input
          {...register("matchTime")}
          type="text"
          placeholder="Match time"
          className="text-white input input-bordered w-full bg-gray-600 border-green-300"
        />
        <select
          {...register("matchValues")}
          className="select select-bordered w-full input bg-gray-600 border-green-300 text-slate-400 "
        >
          <option selected>Match values</option>
          <option>Foot ball</option>
          <option>Cricket</option>
          <option>Table tennis</option>
          <option>Cricket</option>
        </select>
        <select
          {...register("matchStatus")}
          className="select select-bordered w-full text-slate-400 input bg-gray-600 border-green-300"
        >
          <option selected>Match Status</option>
          <option>Live</option>
          <option>comming</option>
        </select>
      </div>
      <div className="flex justify-center mt-3">
        <input type="submit" value="update now" className="btn" />
      </div>
    </form>
  );
};

export default UpdatePostBate;
