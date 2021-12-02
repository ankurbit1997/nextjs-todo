import React from "react";

const Todo = ({ todo }) => {
  return (
    <ul>
      <li className="flex items-center justify-between px-4 text-sm md:text-base capitalize py-2 shadow-md mx-4 rounded-sm mb-4 md:mb-8 md:py-4 md:px-6">
        <div className="flex flex-1 items-center">
          <input
            type="checkbox"
            name="todo"
            className="form-checkbox w-4 h-4 cursor-pointer"
            checked={todo.fields.completed}
          />
          <p
            className={`ml-4 flex-1 ${
              todo.fields.completed && "line-through opacity-70"
            }`}
          >
            {todo.fields.description}
          </p>
        </div>
        <button className="bg-green-500 rounded text-white p-2 hover:bg-green-700 transition-all">
          Delete
        </button>
      </li>
    </ul>
  );
};

export default Todo;
