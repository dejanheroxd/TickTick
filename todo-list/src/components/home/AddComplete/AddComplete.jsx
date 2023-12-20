import React from "react";
import Completed from "./completed/Completed";
import Todos from "./todos/Todos";
import AddButton from "./AddButton";

export default function AddComplete({ onHandlePopUpClick }) {
  return (
    <div className="border border-red-500">
      <Todos />
      <Completed />
      <AddButton onHandlePopUpClick={onHandlePopUpClick} />
    </div>
  );
}
