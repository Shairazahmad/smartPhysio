/* eslint-disable react/prop-types */

const AnatomySVG = ({ onSelectBodyPart }) => {
  const handleBodyPartClick = (e) => {
    const bodyPart = e.target.id; // Get the ID of the clicked body part
    if (bodyPart) {
      onSelectBodyPart(bodyPart);
    }
  };

  return (
    <div>
      <h2>Click on a Body Part</h2>
      <svg
        viewBox="0 0 500 1000"
        xmlns="http://www.w3.org/2000/svg"
        className="svg-container"
        onClick={handleBodyPartClick}
      >
        {/* Head */}
        <circle
          id="head"
          cx="100"
          cy="50"
          r="30"
          fill="#ccc"
          stroke="#000"
          className="clickable"
        />
        <text x="90" y="55" fontSize="10">
          Head
        </text>

        {/* Torso */}
        <rect
          id="torso"
          x="85"
          y="80"
          width="30"
          height="100"
          fill="#ccc"
          stroke="#000"
          className="clickable"
        />
        <text x="87" y="140" fontSize="10">
          Torso
        </text>

        {/* Left Leg */}
        <rect
          id="left-leg"
          x="85"
          y="180"
          width="15"
          height="100"
          fill="#ccc"
          stroke="#000"
          className="clickable"
        />
        <text x="75" y="250" fontSize="10">
          Left Leg
        </text>

        {/* Right Leg */}
        <rect
          id="right-leg"
          x="100"
          y="180"
          width="15"
          height="100"
          fill="#ccc"
          stroke="#000"
          className="clickable"
        />
        <text x="100" y="250" fontSize="10">
          Right Leg
        </text>
      </svg>
    </div>
  );
};

export default AnatomySVG;
