import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { User } from "../models/user";
import { getUser } from "../services/githubServices";
import Loader from "../components/Loader";

const UserProfile = () => {
  const { login } = useParams();
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [user, setUser] = useState<User[]>([]);

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
        <Loader />
      ) : (
        <div>
          <p>{user.login}</p>
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={user.avatar_url}
            alt="Profile"
          />
        </div>
      )}
    </>
  );
};

export default UserProfile;
