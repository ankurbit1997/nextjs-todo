import Head from "next/head";
import { table, minifyRecords } from "./api/utils/Airtable";

export default function Home({ intitialTodos }) {
  console.log(intitialTodos);
  return (
    <div className=" min-h-screen flex justify-center items-center bg-blue-50 font-poppins">
      <Head>
        <title>Todo</title>
        <meta name="description" content="Next Gen Todo App" />
        <link rel="icon" href="/todo.png" />
      </Head>
      <div className="p-16 md:p-20 bg-gray-100 rounded-xl shadow-lg">
        <h1 className="text-4xl md:text-5xl mb-4">Todo List</h1>
        <button className="flex mx-auto bg-blue-500 text-white text-lg md:text-xl font-medium py-2 px-4 rounded-2xl md:px-6 hover:bg-blue-400 transition-all">
          Login
        </button>
        <button className="flex mx-auto bg-green-500 text-white text-lg md:text-xl font-medium py-2 px-4 rounded-2xl md:px-6 hover:bg-green-400 transition-all">
          Logout
        </button>
      </div>
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
