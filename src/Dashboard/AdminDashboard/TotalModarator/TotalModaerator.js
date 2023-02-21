import React from "react";
import userIcon from "../../../Assctes/icons/userIcon.png";
import mailIcon from "../../../Assctes/icons/mailIcon.png";
import callicon from "../../../Assctes/icons/callicon.png";

const TotalModaerator = () => {
  const moderators = [
    {
      name: "Mahadi Hasan",
      img:
        "https://media.licdn.com/dms/image/D5603AQHhpspvnACmVg/profile-displayphoto-shrink_800_800/0/1669213249404?e=1681344000&v=beta&t=Fsu49WUWgtnjh3_UyQu6WMtL3wNppKCtc3QcKYYnkbY",
      id: "111111",
      number: "01711111111",
      email: "mahadi@gmail.com",
    },
    {
      name: "Mahadi Hasan",
      img:
        "https://media.licdn.com/dms/image/D5603AQHhpspvnACmVg/profile-displayphoto-shrink_800_800/0/1669213249404?e=1681344000&v=beta&t=Fsu49WUWgtnjh3_UyQu6WMtL3wNppKCtc3QcKYYnkbY",
      id: "111111",
      number: "01711111111",
      email: "mahadi@gmail.com",
    },
    {
      name: "Mahadi Hasan",
      img:
        "https://media.licdn.com/dms/image/D5603AQHhpspvnACmVg/profile-displayphoto-shrink_800_800/0/1669213249404?e=1681344000&v=beta&t=Fsu49WUWgtnjh3_UyQu6WMtL3wNppKCtc3QcKYYnkbY",
      id: "111111",
      number: "01711111111",
      email: "mahadi@gmail.com",
    },
    {
      name: "Mahadi Hasan",
      img:
        "https://media.licdn.com/dms/image/D5603AQHhpspvnACmVg/profile-displayphoto-shrink_800_800/0/1669213249404?e=1681344000&v=beta&t=Fsu49WUWgtnjh3_UyQu6WMtL3wNppKCtc3QcKYYnkbY",
      id: "111111",
      number: "01711111111",
      email: "mahadi@gmail.com",
    },
    {
      name: "Mahadi Hasan",
      img:
        "https://media.licdn.com/dms/image/D5603AQHhpspvnACmVg/profile-displayphoto-shrink_800_800/0/1669213249404?e=1681344000&v=beta&t=Fsu49WUWgtnjh3_UyQu6WMtL3wNppKCtc3QcKYYnkbY",
      id: "111111",
      number: "01711111111",
      email: "mahadi@gmail.com",
    },
    {
      name: "Mahadi Hasan",
      img:
        "https://media.licdn.com/dms/image/D5603AQHhpspvnACmVg/profile-displayphoto-shrink_800_800/0/1669213249404?e=1681344000&v=beta&t=Fsu49WUWgtnjh3_UyQu6WMtL3wNppKCtc3QcKYYnkbY",
      id: "111111",
      number: "01711111111",
      email: "mahadi@gmail.com",
    },
  ];

  return (
    <main className="w-[90%] mx-auto mt-4">
      <header className="lg:flex justify-between ">
        <h5 className="text-xl font-[700]"> Total Moderator</h5>
        <button className="py-2 px-2 bg-[#2688d7] text-white font-[400] text-[16px] rounded-[5px]">
          Add Moderator{" "}
        </button>
      </header>
      <hr className="w-full mt-2 border-[2px]  border-slate-600" />

      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
        {moderators?.map((moderator) => {
          const { name, img, number, id, email } = moderator;
          return (
            <div className="h-[253px] w-[283px] bg-[#D9D9D9] p-2 rounded mx-auto">
              <section className="text-center">
                <figure>
                  <img
                    src={img}
                    className="h-[95px] w-[100px] rounded-full mx-auto border-[2px] border-[#AC0936]"
                    alt="moderator"
                  />
                </figure>
                <h3 className="text-[#AC0936] text-[15px] font-[500] ">
                  {name}
                </h3>
              </section>
              <section className="text-xs font-[400] text-[#41465F] flex flex-col gap-1 mt-4">
                <div className="flex gap-2">
                  <img src={userIcon} className="h-[18px] w-[19px]" alt="" />
                  <h6 className="">@{id}</h6>
                </div>
                <div className="flex gap-2">
                  <img src={mailIcon} className="h-[18px] w-[19px]" alt="" />
                  <h6 className="">{email}</h6>
                </div>
                <div className="flex gap-2">
                  <img src={callicon} className="h-[18px] w-[19px]" alt="" />
                  <h6 className="">{number}</h6>
                </div>
              </section>

              <button className="bg-[#AC0936] rounded-[3px] w-full text-center h-[30px] mt-3">
                Remove
              </button>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default TotalModaerator;
