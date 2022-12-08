import React from "react";
import logo from "../assets/frontend.png";

const MainFooter = () => {
  return (
    <footer className="font-poppins p-4 bg-gray-900 shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between">
        <img
          src={logo}
          className="mr-3 h-8"
          alt="Happy Frontend Component Logo"
        />
        <span className="text-l font-semibold dark:text-black text-white">
          Happy Frontend Components
        </span>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"></ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://linktr.ee/wendybaque" className="hover:underline">
          Made with ❤ by Wendy Baqué
        </a>
      </span>
    </footer>
  );
};

export default MainFooter;
