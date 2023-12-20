import { CheckSquare, Trash } from "phosphor-react";
import React from "react";

export default function Todos() {
  return (
    <div className="bg-white mx-3 rounded-[4px] p-3">
      <div className="flex items-center gap-x-3">
        <button className="border-2 border-gray-300 rounded-[3px] p-2"></button>
        <p className="pb-[2px]">Attend departmental training session</p>
        <Trash className="text-gray-300" size={26} weight="bold" />
      </div>
    </div>
  );
}
