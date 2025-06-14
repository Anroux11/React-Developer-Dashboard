import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Favorites } from "../pages/favorites"

const Header = () => {
  // const router = useRoute();
  const [showMenu, setShowMenu] = useState(false);

  // const isActive = { path: string } =>
  // router.pathname === path ? "bg-gray-700" : "";

  return (
    <header className="flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 bg-gray-100">
      <a
        href="/"
        className="flex items-center h-10 px-10 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-500 rounded-tl-full rounded-br-full font-bold uppercase italic text-white hover:opacity-90"
      >
        Git Dashboard
      </a>
      <nav className="hidden sm:flex justify-between items-center gap-4 font-bold">
        <Link to="/" className="hover:text-gray-500 text-gray-500">
          Home
        </Link>
        <Link to="/favorites" className="hover:text-gray-500 text-gray-500">
          Favorites
        </Link>
      </nav>
      <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="sm:hidden font-bold text-xl hover:text-gray-500 text-gray-500"
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
        {showMenu && (
          <>
            <a href="*" className="hover:text-gray-500 text-gray-500">
              Home
            </a>
            <a href="/favorites" className="hover:text-gray-500 text-gray-500">
              Favorites
            </a>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
