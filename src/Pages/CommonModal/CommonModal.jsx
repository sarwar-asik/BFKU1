import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/UserContext";

const CommonModal = ({ mainBate, child, match, option, names, mainId }) => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const { matchDate, matchTime, team1, team2 } = mainBate;
  // console.log(match)

  // eslint-disable-next-line no-unused-vars
  const { typeYourRate, typeYourOption } = child;
console.log(child,"child");
  const [Price, setPrice] = useState(100);
  const [Possible, setPossible] = useState(0);

  const priceHandle = (price) => {
    setPrice(price);
    const possibility = price * parseFloat(typeYourRate);
    // console.log(possibility ,"possi");
    setPossible(possibility.toFixed(2));
  };

  const TotalBating = () => {
    if (user) {
      const batingData = {
        name: names,
        price: Price || 100,
        typeYourRate,
        possibility: Possible,
        winStatus: false,
        bateTime: new Date().toLocaleTimeString(),
        bateDate: new Date().toLocaleTimeString(),
        mainId: mainId,
        matchTime,
        matchDate,
        team1,
        team2,
        email: user?.email,
        userID: user?.userID,
        typeYourOption: typeYourOption,
        optionHeader: option?.optionHeader,
      };
      fetch(`https://project-khulna-backend-thebrightfuture.vercel.app/addBating`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(batingData),
      })
        .then((resp) => resp.json())
        .then((result) => {
          if (result.acknowledged) {
            Swal.fire("Good job!", "Your Submithon is Done", "success");
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: result.error,
            });
          }
        });
    } else {
      Swal.fire("We are sorry", "Login First", "info");
    }
  };
  const BetPrice = ["100", "200", "500", "2000", "5000"];
  // console.log(Price,"Price");
  return (
    <div>
      {" "}
      {/* modal */}
      <input
        type="checkbox"
        id={typeYourOption + typeYourRate}
        className="modal-toggle"
      />
      <div className="modal text-black opacity-[0]">
        <div className="modal-box bg-[#0e1929]">
          <header className="flex text-white justify-between items-center py- bg-[#060e1d] px-3 border-b-[3px] border-[#062f3b] pb-3 mb-4">
            <h1 className="text-[24px] ">Place Bate</h1>
            <label
              htmlFor={typeYourOption + typeYourRate}
              className="font-[900]"
            >
              ✖
            </label>
          </header>
          {/* top section */}
          <div className=" text-xl font-medium flex mt-6  gap-3 items-center">
            <img
              className="rounded-[13px]"
              src="https://five6.live/public/frontend/img/thumbnails/cricket.png"
              alt=""
            />

            <aside className="flex flex-col ">
              <p className="flex gap-2 text-[24px] text-white">
                <h3>{team1}</h3>
                VS
                <h3>{team2} </h3>
                <h4>( {typeYourOption} )</h4>
              </p>
              <p className="flex gap-2 text-[14px] text-[#ffffff]">
                <span>||</span>
                <h4>{matchDate} </h4>
                <h4> {matchTime} </h4>
              </p>
            </aside>
          </div>

          {/* form  */}
          <label className="flex gap-1  mt-3">
            {BetPrice?.map((price) => (
              <button
                onClick={() => priceHandle(parseFloat(price))}
                className="bg-[#0d2633] p-2 rounded-[8px] text-white"
              >
                {price}
              </button>
            ))}
          </label>
          {/* <form action="" className="mb-3 mt-1"> */}
          <input
            type="number"
            name="price"
            onChange={(e) => {
              priceHandle(e.target.value);
            }}
            className="mt-2 w-full py-2  bg-[#1c2a39]  text-white px-3 text-xl rounded-[5px] outline-none"
            defaultValue={Price || 100}
            value={Price}
          />

          {/* item-1 */}
          <p className="mt-2 flex text-white justify-between text-[17px] px-1">
            <h2> Total Size </h2>
            <h2>
              {" "}
              {Price} {Price === "" && 100}
            </h2>
          </p>
          {/* item-1 */}
          <p className="mt-2 flex justify-between text-white  px-1 text-[17px] ">
            <h2> Rating </h2>
            <h2> {typeYourRate}</h2>
          </p>
          {/* item-1 */}
          <p className="mt-2 flex justify-between text-[17px]  px-1 text-white">
            <h2> Possible Winning </h2>
            <h2> {Possible}</h2>
          </p>
          {/* submit input */}

          <input
            onClick={TotalBating}
            type="submit"
            className="mt-4 hover:bg-[#13293a] rounded w-full cursor-pointer font -bold bg-[#132736] py-2 text-white text-md"
            value=" ⁜ PLACE BET"
          />
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default CommonModal;
