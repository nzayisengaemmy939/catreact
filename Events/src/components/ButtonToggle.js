import React, { useState } from "react";

const ButtonToggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleState = () => {
    setIsOn(!isOn);
  };

  return (
    <button
      onClick={toggleState}
      className={`p-3 rounded-lg shadow-md transition-colors duration-300 ${
        isOn ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500"
      } text-black font-semibold`}
    >
      {isOn ? "ACTIVE" : "INACTIVE"}
    </button>
  );
};

export default ButtonToggle;
