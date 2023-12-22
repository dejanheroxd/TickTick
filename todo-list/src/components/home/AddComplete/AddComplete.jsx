import React, { useState } from "react";
import Completed from "./completed/Completed";
import Todos from "./todos/Todos";
import AddButton from "./AddButton";

export default function AddComplete({ onHandlePopUpClick }) {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn Typescript with George",
      completed: false,
    },
    {
      id: 2,
      text: "Build Todo List App",
      completed: false,
    },
  ]);

  return (
    <div className="">
      <Todos todos={todos} setTodos={setTodos} />
      <Completed todos={todos} />
      <AddButton onHandlePopUpClick={onHandlePopUpClick} />
    </div>
  );
}
