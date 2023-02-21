import React from 'react'
import criket from '../LiveMatch/img/criketicon.png'
import football from '../LiveMatch/img/football.png'
import tableTanis from '../LiveMatch/img/tabletanis.png'
import bussCat from '../LiveMatch/img/buscatball.png'
import CommonModal from '../../../CommonModal/CommonModal'

const LiveMatchCart = ({ liveMatchData, index }) => {

  return (
    <div>
     {
       liveMatchData.map((lData, index)=> <div className="bg-[#eeeeee] mt-2 p-3 rounded">
    <div className="bg-white p-2 rounded mt-2">
      <div className="match-header flex items-center gap-3">
        <img
          src={lData.gameImg}
          className="w-[49px] rounded-lg"
          alt=""
        />
        <div className="match-subtitle">
          <h4 className="text-[15px] text-black font-[500] flex items-center">
            {lData.team1} <div className="text-[red] px-2">VS</div> {lData.team2} ,{" "}
            {lData.matchType}
          </h4>
          <p className="text-[13px] text-[#757575] font-[500]">
            {lData.matchDate} {lData.matchTime}
          </p>
        </div>
      </div>

      {/* match details */}
      <div className="match-details mt-3">
          {lData.options.map((matchOpt, index) => (
          <div key={index}>
            <div className="flex items-center justify-between gap-2 mt-3">
              <h3 className="font-[500] text-black">{matchOpt.optionHeader}</h3>
              <span className="bg-red-600 text-white text-[10px] px-2 rounded">
                Live
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
                  {matchOpt.opctionData.map((matchOpt, index) => (
                     <label key={index*111} htmlFor={matchOpt} className="w-full py-0">
                  <p className="bg-[#E8F4F4] px-3 py-3 flex  justify-between text-center text-[12px] font-[600] rounded-[8px]">
                    <h6 className="text-slate-400"> {matchOpt?.typeYourOption}</h6>

                    <h6 className="bg-[#008080] mx-3 text-[9px] text-white px-1 py-[2px] rounded">
                      {matchOpt?.typeYourRate}
                    </h6>
                  </p>

                  <CommonModal
                    key={matchOpt?.optionHeader}
                    child={matchOpt}
                    option={matchOpt}
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
  </div>)
     }
    
   
    </div>
  )
}

export default LiveMatchCart
