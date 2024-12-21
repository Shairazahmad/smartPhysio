import AnatomySVG from "./components/AnatomySVG.jsx";
import MultiStepForm from "./components/MultiStepForm.jsx";
import ResponseDisplay from "./components/ResponseDisplay.jsx";
import axios from "./api.js";
import { useState } from "react";

function App() {
  const [selectedBodyPart, setSelectedBodyPart] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  const handleSubmit = async (data) => {
    const response = await axios.post("/api/physiotherapy", data);
    setAiResponse(response.data.advice);
  };

  return (
    <div>
      <h1>Smart Physiotherapist</h1>
      {!selectedBodyPart ? (
        <AnatomySVG onSelectBodyPart={setSelectedBodyPart} />
      ) : (
        <MultiStepForm bodyPart={selectedBodyPart} onSubmit={handleSubmit} />
      )}
      <ResponseDisplay response={aiResponse} />
    </div>
  );
}

export default App;
