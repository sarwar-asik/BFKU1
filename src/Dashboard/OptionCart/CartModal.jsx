import React from "react";

const CartModal = ({ popData, index }) => {
  return (
    <div>
      <input type="checkbox" id={index} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h1>add a new option </h1>
          {popData?.map((d) => (
            <div
              className="flex items-center text-white justify-between bg-[#424258ba] mt-2  p-1 rounded-md"
              key={index}
            >
              <h1>{d.name}</h1> <h4>{d.rate}</h4>
            </div>
          ))}
          <div className="modal-action">
            <label htmlFor={index} className="btn">
              OK
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
