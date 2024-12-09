import React, { useState } from "react";

const ValidationForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear errors on input change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      alert("Form submitted successfully!");
      setFormData({ email: "", password: "" }); // Clear the form
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card bg-gray-100 shadow-md p-6 rounded-lg"
    >
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text text-blue-500 font-semibold">Email</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input input-bordered bg-white border-blue-400 focus:ring focus:ring-blue-300"
          placeholder="Enter your email"
        />
        {errors.email && <p className="text-red-600 mt-2 text-sm">{errors.email}</p>}
      </div>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text text-blue-500 font-semibold">Password</span>
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="input input-bordered bg-white border-blue-400 focus:ring focus:ring-blue-300"
          placeholder="Enter your password"
        />
        {errors.password && <p className="text-red-600 mt-2 text-sm">{errors.password}</p>}
      </div>
      <button
        type="submit"
        className="bg-blue-500 p-3 rounded-md text-white w-full hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default ValidationForm;
