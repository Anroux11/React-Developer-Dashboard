// import { useState } from "react";
// import Header from "../components/Header";
// import UserCard from "../components/UserCard";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";

// const Favorites = () => {
//   const [favorites, setFavorites] = useState([]);
//   const [error, setError] = useState(false);

//   const getFavorites = (): void => {
//     const savedFavorites = localStorage.getItem("favorites");
//     let savedFavoriteList = [];
//     if (savedFavorites) {
//       savedFavoriteList = JSON.parse(savedFavorites);
//       setFavorites(savedFavoriteList);
//     } else {
//       setError(true);
//     }
//   };

//   return (
//     <>
//       {error ? (
//         <div>No Favorites yet..</div>
//       ) : (
//         <div>
//           <Header />
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
//             {favorites.map((user) => (
//               <UserCard user={user} />
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Favorites;
