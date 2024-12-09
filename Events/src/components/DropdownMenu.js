import React, { useState } from "react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`px-4 py-2 rounded-md font-medium mb-2 transition-all duration-300 ${
          isOpen ? "bg-red-600 text-white" : "bg-blue-600 text-white"
        } hover:bg-blue-700`}
      >
        {isOpen ? "Close Menu" : "Open Menu"}
      </button>

      {isOpen && (
        <ul className="absolute mt-2 bg-gray-800 shadow-lg rounded-md w-48 text-white transition-all duration-300">
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer transition-colors duration-200">
            Option 1
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer transition-colors duration-200">
            Option 2
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer transition-colors duration-200">
            Option 3
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
