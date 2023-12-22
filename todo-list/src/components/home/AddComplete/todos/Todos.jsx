import { Check, CheckSquare, Trash } from "phosphor-react";
import React, { useState } from "react";

export default function Todos({ todos, setTodos }) {
  function handleToggle(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  }

  return (
    <div className="bg-white mx-3 flex flex-col gap-y-5 rounded-[4px] p-3">
      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center gap-x-3">
          {todo.completed ? (
            <Check
              className="text-white rounded-[4px] bg-blue-500"
              size={21}
              onClick={() => handleToggle(todo.id)}
              weight="fill"
            />
          ) : (
            <button
              onClick={() => handleToggle(todo.id)}
              className="border-2 border-gray-300 rounded-[3px] p-2"
            ></button>
          )}
          <div className="flex justify-between w-full">
            <p
              className={`${
                todo.completed ? "text-gray-400" : "none"
              } pb-[2px]`}
            >
              {todo.text}
            </p>
            <Trash className="text-gray-300" size={26} weight="bold" />
          </div>
        </div>
      ))}
    </div>
  );
}
