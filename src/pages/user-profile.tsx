import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import type { User } from "../models/user";
import { getUser } from "../services/githubServices";
import Loader from "../components/Loader";
import { ImLocation2 } from "react-icons/im";

export type User = {
  avatar_url: string;
  id: number;
  login: string;
  followers: number;
  following: number;
  location: string;
  bio: string;
  html_url: string;
  name: string;
  public_repos: number;
};

const UserProfile = () => {
  const { login } = useParams();
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setIsDataLoading(true);
    (async () => {
      const username = login ? login : "";
      const _user = await getUser(username);
      setUser(_user);
      setIsDataLoading(false);
    })();
  }, [login]);

  return (
    <>
      {isDataLoading ? (
        <div className="h-screen flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="w-100 px-6 py-6 text-center bg-gray-800 rounded-lg lg:mt-0 xl:px-10 sm:px-10 md: cols-1">
          <img
            className="w-45 h-45 mb-3 rounded-full mx-auto rounded-full h-36 w-36 shadow-[-7px_-6px_45px_-4px_rgba(239,_230,_230,_0.5)]"
            src={user?.avatar_url}
            alt="Profile"
          />
          <div className="space-y-2">
            <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
              <p className="text-white text-3xl mt-4">{user?.name}</p>
              <p className="text-neutral-400 text-md">{user?.login}</p>
              <ImLocation2 className="text-xl mt-5" />
              <p className="text-white text-md">
                {user?.location ? user?.location : "No Location Available"}
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
              <p className="mt-10 text-xl">Followers: {user?.followers}</p>
              <p className="mb-10 text-xl">Following: {user?.following}</p>
              <p className="mb-10 text-xl">
                Public Repos:{" "}
                {user?.public_repos ? user?.public_repos : "No Repos"}
              </p>
              <p className="">
                Bio: {user?.bio ? user.bio : "No Bio Available"}
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
              <div className="mt-5">
                <Link
                  to={`${user?.html_url}`}
                  className="inline-flex items-center  px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                >
                  Github
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;
