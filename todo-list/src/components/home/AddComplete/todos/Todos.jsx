// ... (other imports and functions)

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

  function allCompleted() {
    return todos.every((todo) => todo.completed);
  }

  return (
    <div>
      {allCompleted() ? (
        ""
      ) : (
        <div className="bg-white mx-3 flex flex-col gap-y-5 rounded-[4px] p-3">
          {todos.map(
            (todo) =>
              !todo.completed && (
                <div key={todo.id} className="flex items-center gap-x-3">
                  <button
                    onClick={() => handleToggle(todo.id)}
                    className="border-2 border-gray-300 rounded-[3px] p-2"
                  ></button>
                  <p className="pb-[2px]">{todo.text}</p>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
}
