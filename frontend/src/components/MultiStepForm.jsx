/* eslint-disable react/prop-types */

import { useState } from "react";

const MultiStepForm = ({ bodyPart, onSubmit }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    problem: "",
    severity: "",
    duration: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    console.log({ bodyPart, ...formData });
    onSubmit({ bodyPart, ...formData });
  };

  return (
    <div>
      <h3>Step {step}: Describe the Problem</h3>
      {step === 1 && (
        <div>
          <label>Problem: </label>
          <input
            name="problem"
            onChange={handleChange}
            placeholder="e.g. Pain"
          />
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <label>Severity (1-10): </label>
          <input name="severity" onChange={handleChange} placeholder="e.g. 7" />
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <label>Duration: </label>
          <input
            name="duration"
            onChange={handleChange}
            placeholder="e.g. 2 weeks"
          />
          <button onClick={prevStep}>Back</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
