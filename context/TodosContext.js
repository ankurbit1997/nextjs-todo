import React, { createContext, useState } from "react";

const TodosContext = createContext();

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const refreshTodos = async () => {
    try {
      const res = await (await fetch("/api/getTodos")).json();
      setTodos(res);
    } catch (err) {
      console.log(err);
    }
  };

  const addTodo = async (todo) => {
    setFormLoading(true);
    try {
      const res = await fetch("/api/createTodos", {
        method: "POST",
        body: JSON.stringify({ description: todo }),
        headers: { "Content-Type": "application/json" },
      });
      const newTodo = await res.json();
      setTodos((prevTodos) => {
        const updatedTodos = [newTodo, ...prevTodos];
        return updatedTodos;
      });
      setFormLoading(false);
    } catch (err) {
      console.error(err);
      setFormLoading(false);
    }
  };

  const updateTodo = async (updatedTodo) => {
    setLoading(true);
    try {
      await fetch("/api/updateTodos", {
        method: "PUT",
        body: JSON.stringify(updatedTodo),
        headers: {
          "content-type": "application/json",
        },
      });

      setTodos((prevTodos) => {
        const existingTodos = [...prevTodos];
        const existingTodo = existingTodos.find(
          (todo) => todo.id === updatedTodo.id
        );
        existingTodo.fields = updatedTodo.fields;
        return existingTodos;
      });
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };
  const deleteTodo = async (id) => {
    setLoading(true);

    try {
      const res = await fetch("/api/deleteTodos", {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: { "Content-Type": "application/json" },
      });
      setTodos((prevTodos) => {
        return prevTodos.filter((todo) => todo.id !== id);
      });
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        loading,
        formLoading,
        setTodos,
        refreshTodos,
        updateTodo,
        deleteTodo,
        addTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export { TodosContext, TodosProvider };
