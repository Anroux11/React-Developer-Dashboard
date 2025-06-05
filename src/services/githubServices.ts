import axios from "axios";

const token: string = `${import.meta.env.VITE_TOKEN}`;

const axiosInstance = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${token}`,
  },
});

export const getUsers = async (search?: string) => {
  const searchParams = new URLSearchParams();
  if (search) {
    searchParams.set("q", search);
  }
  let url = "/users";
  if (search) {
    url = `/search/users?${searchParams.toString()}`;
  }
  const data = await axiosInstance
    .get(url)
    .then(
      (response) => {
        if (response.data.items) {
          return response.data.items;
        }
        return response.data;
      },
      (err) => {
        console.error(err);
      }
    )
    .catch((err) => {
      console.error(err);
    });
  return data;
};

export const getUser = async (username: string) => {
  const url = `/users/${username}`;
  const data = await axiosInstance
    .get(url)
    .then(
      (response) => {
        if (response.data.items) {
          return response.data.items;
        }
        return response.data;
      },
      (err) => {
        console.error(err);
      }
    )
    .catch((err) => {
      console.error(err);
    });
  return data;
};
