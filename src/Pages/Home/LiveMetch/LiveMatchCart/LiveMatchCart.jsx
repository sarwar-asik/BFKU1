import React from "react";
import criket from "../LiveMatch/img/criketicon.png";
import football from "../LiveMatch/img/football.png";
import tableTanis from "../LiveMatch/img/tabletanis.png";
import bussCat from "../LiveMatch/img/buscatball.png";
import CommonModal from "../../../CommonModal/CommonModal";

const LiveMatchCart = ({ liveMatchData, index ,mainId}) => {
  console.log(mainId, "++++ mainId+++");
  return (
    <div>
      <div className="bg-[#192537] mt-2 p-3 rounded">
        <div className="bg-[#202b3b] p-2 rounded mt-2">
          <div className="match-header flex items-center gap-3">
            <img
              src={liveMatchData?.gameImg}
              className="w-[49px] rounded-lg"
              alt=""
            />
            <div className="match-subtitle">
              <h4 className="text-[15px] text-white font-[500] flex items-center">
                {liveMatchData?.team1} <div className="text-[red] px-2">VS</div>{" "}
                {liveMatchData?.team2} , {liveMatchData?.matchType}
              </h4>
              <p className="text-[13px] text-[#ffffff] font-[500]">
                {liveMatchData?.matchDate} {liveMatchData?.matchTime}
              </p>
            </div>
          </div>

          {/* match details */}
          <div className="match-details mt-3">
            {liveMatchData.options.map((matchOpt, index) => (
              <div key={index}>
                <div className="flex items-center justify-between gap-2 mt-3">
                  <h3 className="font-[500] text-[white]">
                    {matchOpt.optionHeader}
                  </h3>
                  <span className="bg-red-600 text-white text-[10px] px-2 rounded">
                    Live
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {matchOpt.opctionData.map((child, index) => (
                    <label
                      key={index * 111}
                      htmlFor={child.typeYourOption+child?.typeYourRate}
                      className="w-full py-0"
                    >
                      <p className="bg-[#1a1f2a] duration-200 hover:bg-[#141f2e] px-3 py-3 flex  justify-between text-center text-[12px] font-[600] rounded-[8px]">
                        <h6 className="text-white">
                          {" "}
                          {child?.typeYourOption}
                        </h6>

                        <h6 className="bg-[#2d456b] mx-3 text-[9px] text-white px-1 py-[2px] rounded">
                          {child?.typeYourRate}
                        </h6>
                      </p>

                      <CommonModal
                        key={child.typeYourOption+child?.typeYourRate+ index}
                        mainId={mainId}
                        mainBate={liveMatchData}
                        child={child}
                        option={matchOpt}
                        name="Live"
                        match={matchOpt}
                      ></CommonModal>
                    </label>
                  ))}
                </div>
                {/* match locations */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMatchCart;
