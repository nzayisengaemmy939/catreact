import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0); // Prevent negative counts

  return (
    <div className="p-4 rounded-lg shadow-lg bg-gray-100 ">
      <p className="text-2xl font-bold text-blue-700 mb-4">Counter: {count}</p>
      <div>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none shadow-md m-2"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none shadow-md m-2"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
