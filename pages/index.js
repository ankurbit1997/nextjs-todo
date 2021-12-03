import Head from "next/head";
import Navbar from "../components/Navbar";
import Todo from "../components/Todo";
import { table, minifyRecords } from "./api/utils/Airtable";
import { TodosContext } from "../context/TodosContext";
import { useEffect, useContext } from "react";
import AddTodo from "../components/addTodo";

export default function Home({ intitialTodos }) {
  const { todos, setTodos } = useContext(TodosContext);

  useEffect(() => {
    setTodos(intitialTodos);
  }, [intitialTodos, setTodos]);

  const completedTodo = todos.filter(
    (todo) => todo.fields.completed === true
  ).length;

  return (
    <div className=" min-h-screen">
      <Head>
        <title>Todo</title>
        <meta name="description" content="Next Gen Todo App" />
        <link rel="icon" href="/todo.png" />
      </Head>
      <Navbar />
      <main className="container mx-auto mt-10 max-w-4xl">
        <AddTodo />
        {todos ? (
          todos.map((todo) => <Todo todo={todo} key={todo.id} />)
        ) : (
          <p>No Todos available</p>
        )}
        <p className="text-center capitalize">
          you have completed {completedTodo}{" "}
          {completedTodo.length === 1 ? "task" : "tasks"}
        </p>
      </main>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  try {
    const intitialTodos = await table.select({}).firstPage();
    return {
      props: {
        intitialTodos: minifyRecords(intitialTodos),
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        error: "Something went wrong",
      },
    };
  }
};
