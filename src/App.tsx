import "./App.css";
import Home from "./pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserProfile from "./pages/user-profile";
// import Favorites from "./pages/favorites";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/:login", element: <UserProfile /> },
  // { path: "/favorites", element: <Favorites /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
