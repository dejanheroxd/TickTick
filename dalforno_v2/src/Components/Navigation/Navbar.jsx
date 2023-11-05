import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen((prev) => !prev);
  }

  return (
    <nav className="border justify-around flex items-center py-2">
      <div className="flex  items-center justify-between  mg:w-[1750px]">
        {navOpen && (
          <ul className="flex text-3xl fixed top-0 z-40 bottom-0 left-0 right-0 h-screen flex-col items-center justify-center gap-y-8 text-black bg-white md:gap-x-24 md:text-italia ">
            <li>
              <Link to={"/"}>HOME</Link>
            </li>
            <li>
              <Link to={"/menu"}>MENU</Link>
            </li>
            <li>
              <Link to={"/about"}>ABOUT</Link>
            </li>
            <li>
              <Link to={"/contact"}>CONTACT</Link>
            </li>
          </ul>
        )}
        <button
          onClick={() => toggleNav()}
          className=" flex p-5 flex-col gap-y-1 z-50 absolute top-2 right-2"
        >
          <span className="bg-black w-7 h-[2px] block"></span>
          <span className="bg-black w-7 h-[2px] block"></span>
        </button>
        <button className="w-32 py-3 hidden md:block bg-italia text-white">
          Reserve
        </button>
      </div>
    </nav>
  );
}
