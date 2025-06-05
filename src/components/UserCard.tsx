import { FaStar } from "react-icons/fa";
import type { User } from "../models/user";

const UserCard: React.FC<{ user: User }> = ({ user }) => {
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
          <a
            href={`/${user.login}`}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 hover:"
          >
            View Profile
          </a>
          <a
            href="/favorites"
            className="inline-flex items-center ml-2 px-4 py-2 text-lg font-medium text-center text-white rounded-lg "
          >
            <FaStar className="hover:text-yellow-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
