import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-green-500 flex flex-row items-center justify-center">
      <Link
        to="/"
        className="font-semibold bg-transparent hover:bg-green-700 p-6 px-10"
      >
        Home
      </Link>
      <Link
        to="/songs"
        className="font-semibold bg-transparent hover:bg-green-700 p-6 px-10"
      >
        Songs
      </Link>
    </div>
  );
};

export default Navbar;
