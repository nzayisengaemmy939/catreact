import React from "react";

const Child = React.memo(({ count }) => {
  console.log("Child rendered!");

  return (
    <div className="card bg-gray-100 shadow-lg p-6 rounded-lg">
      <h2 className="text-xl font-semibold text-blue-700 mb-2">
        Child Component
      </h2>
      <p className="text-lg text-gray-800">
        <span className="font-medium">Count from Parent:</span> {count}
      </p>
    </div>
  );
});

export default Child;
