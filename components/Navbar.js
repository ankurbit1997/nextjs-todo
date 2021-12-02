import React from "react";

const Navbar = () => {
  return (
    <div className="py-2 px-3  md:py-2 md:px-4 bg-gray-100 shadow">
      <div className="container flex items-center justify-between mx-auto">
        <h1 className="text-xl leading-none  md:text-2xl">Todo List</h1>
        <div>
          <button className="bg-blue-500 text-white text-sm md:text-lg py-1 px-2  rounded md:px-4 md:py-2 hover:bg-blue-400 transition-all">
            Login
          </button>
          <button className="bg-green-500 text-white text-sm md:text-lg py-1 px-2  rounded md:px-4 md:py-2 hover:bg-green-400 transition-all">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
