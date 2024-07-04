import React from "react";
import PrimaryButton from './PrimaryButton/PrimaryButton'
import SuccessButton from './SuccessButton/SuccessButton'
import DangerButton from './DangerButton/DangerButton.js'
function Button() {
  const ButtonStyles = {
    maxWidth: "600px",
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    boxSizing: "border-box",
  };
  return (
    <div style={ButtonStyles}>
      <h2>Buttons</h2>
      <PrimaryButton />
      <SuccessButton />
      <DangerButton />
    </div>
  );
}

export default Button;
