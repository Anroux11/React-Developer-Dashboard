import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";

const Home = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <UserCard />
      <div className="flex">
        <a
          href="#"
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Previous
        </a>

        <a
          href="#"
          className="flex items-center justify-center px-4 h-10 ms-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </a>
      </div>
    </>
  );
};

export default Home;
