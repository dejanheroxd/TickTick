import React from "react";

export default function Completed({ todos }) {
  return (
    <div className=" bg-white mt-3 mx-3 flex flex-col gap-y-5 rounded-[4px] p-3">
      <div>
        <p>Finished</p>
      </div>
      {todos.map((todo) => (
        <div className="flex justify-between w-full">
          {todo.completed ? (
            <p
              className={`${
                todo.completed ? "text-gray-400" : "none"
              } pb-[2px]`}
            >
              {todo.text}
            </p>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
}
