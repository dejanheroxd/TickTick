import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between px-4 h-[60px] items-center border">
        <div className="flex items-center ">
          <div className="flex flex-col gap-y-1 ">
            <span className="w-5 block h-[2px] bg-black"></span>
            <span className="w-5 block h-[2px] bg-black"></span>
            <span className="w-5 block h-[2px] bg-black"></span>
          </div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <p className="pl-5 text-xl pb-[4px]">Work</p>
        </div>
        <div className="flex flex-col gap-y-1">
          <span className="w-[3px] rounded-full block h-[3px] bg-black"></span>
          <span className="w-[3px] rounded-full block h-[3px] bg-black"></span>
          <span className="w-[3px] rounded-full block h-[3px] bg-black"></span>
        </div>
      </nav>
    </>
  );
}
