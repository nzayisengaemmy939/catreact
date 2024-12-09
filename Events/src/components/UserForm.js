import React, { useState } from "react";

const UserForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      alert("Input cannot be empty!");
    } else {
      console.log(inputValue);
      alert(`Submitted: ${inputValue}`);
      setInputValue(""); // Clear the input field after submission
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-blue-50 rounded-lg shadow-lg w-full"
    >
      <label className="block mb-2 text-lg font-medium text-blue-700">
        Your Input:
      </label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter something..."
        className="p-3 border border-blue-300 rounded-lg w-full mb-4 focus:outline-none focus:ring  bg-white"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none shadow-md"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
