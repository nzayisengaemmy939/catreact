import React from "react";

function ProfileCard({ name, age, email }) {
  return (
    <div className="card bg-base-200 text-white  p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-lg">Age: {age}</p>
      <p className="text-lg">Email: {email}</p>
    </div>
  );
}

export default ProfileCard;
