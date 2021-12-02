import Head from "next/head";

export default function Home() {
  return (
    <div className=" min-h-screen flex justify-center items-center bg-blue-50 font-poppins">
      <Head>
        <title>Fullstack Todo</title>
        <meta name="description" content="Next Gen Todo App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-16 md:p-20 bg-gray-100 rounded-xl shadow-lg">
        <h1 className="text-4xl md:text-5xl mb-4">Todo List</h1>
        <button className="flex mx-auto bg-blue-500 text-white text-lg md:text-xl font-medium py-2 px-4 rounded-2xl md:px-6">
          Login
        </button>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      test: "test",
    },
  };
};
