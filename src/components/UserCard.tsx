import { FaStar } from "react-icons/fa";
import type { User } from "../models/user";
import { Link } from "react-router-dom";

const UserCard: React.FC<{ user: User }> = ({ user }) => {
  // const handleFavorite = (username: string): void => {
  //   const savedFavorites = localStorage.getItem("favorites");
  //   let savedFavoriteList = [];
  //   if (savedFavorites) {
  //     savedFavoriteList = JSON.parse(savedFavorites);
  //     savedFavoriteList.push(username);
  //     localStorage.setItem("favorites", JSON.stringify(savedFavoriteList));
  //   } else {
  //     savedFavoriteList.push(username);
  //     localStorage.setItem("favorites", JSON.stringify(savedFavoriteList));
  //   }
  // };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10 pt-10 border-white-200">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={user.avatar_url}
          alt="Profile"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {user.login}
        </h5>
        <p className="text-sm text-gray-500 dark:text-gray-400"></p>
        <div className="flex mt-4 md:mt-6">
          <Link
            to={`/${user.login}`}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 hover:"
          >
            View Profile
          </Link>
          <div
            className="inline-flex items-center ml-2 px-4 py-2 text-lg font-medium text-center text-white rounded-lg"
            // onClick={() => handleFavorite(user.login)}
          >
            <FaStar className="hover:text-yellow-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
