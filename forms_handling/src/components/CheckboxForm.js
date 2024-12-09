import React, { useState } from "react";

const CheckboxForm = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((option) => option !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">
        Select Your Options
      </h2>
      <form className="space-y-4 bg-gray-100">
        {["Option 1", "Option 2", "Option 3"].map((option, index) => (
          <label key={index} className="flex items-center space-x-3">
            <input
              type="checkbox"
              value={option}
              onChange={handleChange}
              className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-300"
            />
            <span className="text-gray-800 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
              {option}
            </span>
          </label>
        ))}
      </form>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">
          Selected Options:
        </h3>
        {selectedOptions.length > 0 ? (
          <ul className="list-disc pl-6">
            {selectedOptions.map((option, index) => (
              <li
                key={index}
                className="text-lg text-blue-500 font-medium hover:text-blue-700 transition duration-300"
              >
                {option}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500 italic">No options selected.</p>
        )}
      </div>
    </div>
  );
};

export default CheckboxForm;
