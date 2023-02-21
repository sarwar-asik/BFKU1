import React from "react";
import { useLocation } from "react-router-dom";

const EditBate = (props) => {
  const { state } = useLocation();
  // console.log(state.from);
  const { teamName ,teamType,matchDate,matchTime,matchType} = state?.from;

  const handleEdit =event=>{
  event.preventDefault();
  const form =event.target;
  const teamName =  form.teamName.value;
  const teamType =form.teamType.value;
  
//   const matchDate = form.matchDate;
//   const matchTime = form.matchTime;

  const totalData ={
    teamName,
    teamType,
  }
  console.log(totalData);
  }

  return (
    <div className=" container mx-auto ">
      <h1 className="text-xl font-bold text-center bg-[#008080]  text-white py-5 font-serif">
        {" "}
        Edit {teamName}
      </h1>

      <form onSubmit={handleEdit} action="" className="px-2 mt-5">
        <section className="grid grid-cols-3 gap-3">
            {/* input-2 */}
          <div className="form-control">
            <label htmlFor="" className="text-xl font-semibold">
              Team Name
            </label>
            <input
              name="teamName"
              defaultValue={teamName}
              type="text"
              className="bg-[#EEEEEE]  py-3 outline-none rounded w-full mt-3       text-slate-600 px-2 "
            />
          </div>
            {/* input-2 */}
          <div className="form-control">
            <label htmlFor="" className="text-xl font-semibold">
              Team Type
            </label>
            <input
              name="teamType"
              defaultValue={teamType}
              type="text"
              className="bg-[#EEEEEE]  py-3 outline-none rounded w-full mt-3       text-slate-600 px-2 "
            />
          </div>
            {/* input-2 */}
          <div className="form-control">
            <label htmlFor="" className="text-xl font-semibold">
              Match Date 
            </label>
            <input
              name="matchDate"
              placeholder={matchDate}
              type="date"
              className="bg-[#EEEEEE]  py-3 outline-none rounded w-full mt-3       text-slate-600 px-2 "
            />
          </div>
            {/* input-2 */}
          <div className="form-control">
            <label htmlFor="" className="text-xl font-semibold">
              Match Time 
            </label>
            <input
              name="matchType"
              defaultValue={matchTime}
              type="time"
              className="bg-[#EEEEEE]  py-3 outline-none rounded w-full mt-3       text-slate-600 px-2 "
            />
          </div>
        </section>
        <input
            type="submit"
            className="py-2 rounded  mt-2 bg-[#008080] px-2 text-white font-bold text-xl font-serif w-full cursor-pointer"
          />
      </form>
    </div>
  );
};

export default EditBate;
