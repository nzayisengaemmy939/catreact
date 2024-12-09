import React, { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    payment: "",
  });

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    alert("Form submitted successfully!");
    console.log("Form Data:", formData);
  };

  return (
    <div className="card bg-blue-50 shadow-lg p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">
        Step {step} of 3
      </h2>

      {step === 1 && (
        <div className="form-control">
          <label className="label">
            <span className="label-text text-blue-700 font-medium">Name</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered border-blue-400 focus:ring focus:ring-blue-300 bg-white"
            placeholder="Enter your name"
          />
        </div>
      )}
      {step === 2 && (
        <div className="form-control">
          <label className="label">
            <span className="label-text text-blue-700 font-medium">Address</span>
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="input input-bordered border-blue-400 focus:ring focus:ring-blue-300"
            placeholder="Enter your address"
          />
        </div>
      )}
      {step === 3 && (
        <div className="form-control">
          <label className="label">
            <span className="label-text text-blue-700 font-medium">
              Payment Info
            </span>
          </label>
          <input
            type="text"
            name="payment"
            value={formData.payment}
            onChange={handleChange}
            className="input input-bordered border-blue-400 focus:ring focus:ring-blue-300"
            placeholder="Enter payment info"
          />
        </div>
      )}

      <div className="flex justify-between mt-6">
        {step > 1 && (
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 focus:outline-none"
          >
            Back
          </button>
        )}
        {step < 3 ? (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
