import React, { useState } from "react";

function PrimaryOutlineBtn() {
  const [isSecondButtonDisabled, setIsSecondButtonDisabled] = useState(false);

  const handleSecondButtonClick = () => {
    setIsSecondButtonDisabled(true);
  };
  const buttonLabel = isSecondButtonDisabled ? "Disabled" : "Click to Disable";
  const buttonStyles = (isDisabled) => ({
    color: isDisabled ? "#8c9eff" : "#4a66ea",
    padding: "10px 20px",
    border: "none",
    borderRadius: "10px",
    cursor: isDisabled ? "not-allowed" : "pointer",
    fontSize: "16px",
    outline: `1px solid ${isDisabled ? "#8c9eff" : "#4a66ea"}`,
    backgroundColor: "transparent",
    transition: "none",
    pointerEvents: isDisabled ? "none" : "auto",
    width: "200px",
  });

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBlock: "10px",
        }}
      >
        <button style={buttonStyles(false)}>Normal Button</button>
        <button
          style={buttonStyles(isSecondButtonDisabled)}
          disabled={isSecondButtonDisabled}
          onClick={handleSecondButtonClick}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}

export default PrimaryOutlineBtn;
