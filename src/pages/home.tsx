import { useState } from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import { getUsers } from "../services/githubServices";
import type { User } from "../models/user";
import { useDebounce } from "use-debounce";
import Loader from "../components/Loader";

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchValue] = useDebounce(searchTerm, 500);
  const [isDataLoading, setIsDataLoading] = useState(false);

  const onSearch = (value: string): void => {
    setSearchTerm(value);
  };

  useEffect(() => {
    setIsDataLoading(true);
    (async () => {
      const _users = await getUsers(debouncedSearchValue);
      setUsers(_users);
      setIsDataLoading(false);
    })();
  }, [debouncedSearchValue]);

  return (
    <>
      {isDataLoading ? (
        <div className="h-screen flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div>
          <Header />
          <SearchBar onSearch={onSearch} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {users?.map((user) => (
              <UserCard user={user} />
            ))}
          </div>
          <div className="flex">
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 mt-5 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>

            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 mt-5 ms-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
