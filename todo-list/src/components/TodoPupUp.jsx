import { PaperPlaneRight } from "phosphor-react";
import React, { useEffect, useRef } from "react";

export default function TodoPupUp({ isPopUpActive, setPopUpActive }) {
  const popUp = useRef();

  useEffect(() => {
    function handleOutsideClick(event) {
      if (popUp.current && !popUp.current.contains(event.target)) {
        setPopUpActive(false);
      }
    }

    if (isPopUpActive) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isPopUpActive, setPopUpActive]);

  return (
    isPopUpActive && (
      <div
        ref={popUp}
        className=" bg-white h-24 absolute bottom-0 right-0 left-0"
      >
        <input
          type="text"
          placeholder="Add your todo"
          className="mt-4 ml-3 w-[80%]"
        />
        <div className="rounded-3xl  absolute right-4 bottom-2 py-[6px] bg-blue-500 w-[50px] flex justify-center">
          <PaperPlaneRight size={25} className="text-white" weight="fill" />
        </div>
      </div>
    )
  );
}
