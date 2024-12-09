import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-blue-300 transition duration-300">
            React Router App
          </Link>
        </h1>
        <div className="space-x-6 hidden md:flex">
          <Link
            to="/"
            className="text-lg hover:text-blue-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-lg hover:text-blue-300 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-lg hover:text-blue-300 transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/blog"
            className="text-lg hover:text-blue-300 transition duration-300"
          >
            Blog
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-lg px-4 py-2 rounded bg-white text-blue-600 hover:bg-gray-200 transition duration-300">
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
