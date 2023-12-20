import { CalendarBlank, CheckSquare, Compass } from "phosphor-react";
import React, { useState } from "react";

export default function BottomBar() {
  const [isCheckSquareOpen, setCheckSquareOpen] = useState(false);
  const [isCalendarBlankOpen, setCalendarBlankOpen] = useState(false);
  const [isCompassOpen, setCompassOpen] = useState(false);

  function handleCheckSquareClick() {
    setCheckSquareOpen(true);
    setCalendarBlankOpen(false);
    setCompassOpen(false);
  }
  function handleCalendarBlankClick() {
    setCheckSquareOpen(false);
    setCalendarBlankOpen(true);
    setCompassOpen(false);
  }
  function handleCompassClick() {
    setCheckSquareOpen(false);
    setCalendarBlankOpen(false);
    setCompassOpen(true);
  }

  return (
    <div className="absolute w-full h-16 bottom-0 flex pb-8">
      <div className="flex justify-around w-full items-center">
        <div className="flex justify-center w-20 relative">
          <CheckSquare
            size={25}
            onClick={() => handleCheckSquareClick()}
            className={`${
              isCheckSquareOpen ? "text-blue-500" : "text-gray-400"
            }`}
            weight="bold"
          />
          {isCheckSquareOpen ? (
            <div className="block bg-gray-500 w-20 h-[3px] absolute bottom-[-25px]"></div>
          ) : (
            ""
          )}
        </div>
        <div className="flex justify-center w-20 relative">
          <CalendarBlank
            size={25}
            onClick={() => handleCalendarBlankClick()}
            className={`${
              isCalendarBlankOpen ? "text-blue-500" : "text-gray-400"
            }`}
            weight="bold"
          />
          {isCalendarBlankOpen ? (
            <div className="block bg-gray-500 w-20 h-[3px] absolute bottom-[-25px]"></div>
          ) : (
            ""
          )}
        </div>
        <div className="flex justify-center w-20 relative">
          <Compass
            size={25}
            onClick={() => handleCompassClick()}
            className={`${isCompassOpen ? "text-blue-500" : "text-gray-400"}`}
            weight="bold"
          />
          {isCompassOpen ? (
            <div className="block bg-gray-500 w-20 h-[3px] absolute bottom-[-25px]"></div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
