import React from "react";
import { useForm } from "react-hook-form";

const LiveMatchSetOption = () => {
  const { register, handleSubmit } = useForm();
  const handleAdd = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(handleAdd)} className="mt-5">
      <div>
        <input
          {...register("team1")}
          type="text"
          placeholder="Team name 1"
          className="text-white input input-bordered w-full bg-gray-600 mb-2"
        />
        <input
          {...register("team2")}
          type="text"
          placeholder="Team name 2"
          className="text-white input input-bordered w-full bg-gray-600 border-green-300 mb-2"
        />
        <input
          {...register("matchDate")}
          type="text"
          placeholder="Match date"
          className="text-white input input-bordered w-full bg-gray-600 border-green-300"
        />
      </div>
      <div className="flex justify-end mt-2">
        <div>
          <p className="font-semibold">+ Add more options</p>
          <div className="flex items-center gap-2 justify-end">
            <p>is it toss</p>
            <input type="checkbox" className="checkbox checkbox-xs mt-1" />
          </div>
        </div>
      </div>
      <div className="flex justify-start mt-3">
        <input type="submit" value="Add" className="btn" />
      </div>
    </form>
  );
};

export default LiveMatchSetOption;
