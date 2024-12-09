import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password });
  };

  return (
    <form onSubmit={handleSubmit} className="card bg-gray-100 shadow-md p-6">
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Username</span>
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input input-bordered bg-white"
        />
      </div>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input input-bordered bg-white"
        />
      </div>
      <button type="submit" className="bg-blue-500 p-3 w-full rounded-md text-white">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
