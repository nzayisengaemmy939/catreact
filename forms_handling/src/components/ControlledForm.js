import React, { useState } from "react";

const ControlledForm = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="card bg-blue-50 shadow-lg p-6 rounded-lg">
      <form>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-blue-700 font-semibold">Enter Text</span>
          </label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="input input-bordered border-blue-400 focus:ring focus:ring-blue-300 text-blue-900 bg-white"
            placeholder="Type something..."
          />
        </div>
      </form>
      <p className="text-blue-600 font-medium mt-2">You entered: {inputValue}</p>
    </div>
  );
};

export default ControlledForm;
