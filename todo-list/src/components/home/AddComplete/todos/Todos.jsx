import { CheckSquare, Trash } from "phosphor-react";
import React, { useState } from "react";

export default function Todos() {
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
    <div className="bg-white mx-3 flex flex-col gap-y-5 rounded-[4px] p-3">
      {todos.map((todo) => (
        <div className="flex items-center gap-x-3">
          <button className="border-2 border-gray-300 rounded-[3px] p-2"></button>
          <div className="flex justify-between w-full">
            <p className="pb-[2px]">{todo.text}</p>
            <Trash className="text-gray-300" size={26} weight="bold" />
          </div>
        </div>
      ))}
    </div>
  );
}
