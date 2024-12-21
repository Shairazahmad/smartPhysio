/* eslint-disable react/prop-types */
const ResponseDisplay = ({ response }) => {
  return (
    <div>
      <h3>AI Response:</h3>
      <p>{response || "No response yet."}</p>
    </div>
  );
};

export default ResponseDisplay;
