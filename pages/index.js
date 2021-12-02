import Head from "next/head";
import Navbar from "../components/Navbar";
import Todo from "../components/Todo";
import { table, minifyRecords } from "./api/utils/Airtable";

export default function Home({ intitialTodos }) {
  console.log(intitialTodos);
  return (
    <div className=" min-h-screen">
      <Head>
        <title>Todo</title>
        <meta name="description" content="Next Gen Todo App" />
        <link rel="icon" href="/todo.png" />
      </Head>
      <Navbar />
      <main className="container mx-auto mt-10 max-w-4xl">
        {intitialTodos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
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
