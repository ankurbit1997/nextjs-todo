import React, { useState, useContext } from "react";
import { TodosContext } from "../context/TodosContext";

const AddForm = () => {
  const { addTodo, formLoading } = useContext(TodosContext);
  const [todo, setTodo] = useState("");

  const addTask = () => {
    addTodo(todo);
    setTodo("");
  };

  return (
    <div
      className={`px-6 flex items-center justify-between py-4 mb-8 ${
        formLoading && "pointer-events-none opacity-20"
      } `}
    >
      <input
        type="text"
        className=" flex-1 p-3  border border-gray-400 focus:outline-none"
        placeholder="ex. Going To Gym"
        value={todo || ""}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        onClick={() => addTask()}
        className="bg-blue-400 text-lg text-white p-3"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddForm;
