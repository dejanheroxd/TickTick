import React from "react";

export default function AddButton({ onHandlePopUpClick }) {
  return (
    <div className="absolute bottom-20 right-5 ">
      <button
        onClick={() => onHandlePopUpClick()}
        className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] w-11 h-11  rounded-full bg-blue-500"
      >
        <p className="text-white text-3xl pb-2">+</p>
      </button>
    </div>
  );
}
