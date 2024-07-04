import React, { useState } from "react";

function PrimaryOutlineBtn() {
  const [isSecondButtonDisabled, setIsSecondButtonDisabled] = useState(false);

  const handleSecondButtonClick = () => {
    setIsSecondButtonDisabled(true);
  };

  const buttonLabel = isSecondButtonDisabled ? "Disabled" : "Click to Disable";

  const buttonStyles = (isDisabled) => ({
    color: isDisabled ? "#e74c3c" : "#ff6666",
    padding: "10px 20px",
    border: "none",
    borderRadius: "10px",
    cursor: isDisabled ? "not-allowed" : "pointer",
    fontSize: "16px",
    outline: `1px solid ${isDisabled ? "#e74c3c" : "#ff6666"}`,
    backgroundColor: "transparent",
    transition: "none",
    pointerEvents: isDisabled ? "none" : "auto",
    width: "200px",
  });

  const hoverStyles = {
    color: "#ffffff",
    backgroundColor: "#ff9999",
  };

  const activeStyles = {
    backgroundColor: "#ff6666",
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBlock: "10px",
        }}
      >
        <button
          style={buttonStyles(false)}
          onMouseOver={(e) => {
            e.target.style.color = hoverStyles.color;
            e.target.style.backgroundColor = hoverStyles.backgroundColor;
          }}
          onMouseOut={(e) => {
            e.target.style.color = buttonStyles(false).color;
            e.target.style.backgroundColor =
              buttonStyles(false).backgroundColor;
          }}
          onMouseDown={(e) =>
            (e.target.style.backgroundColor = activeStyles.backgroundColor)
          }
          onMouseUp={(e) => {
            e.target.style.backgroundColor = hoverStyles.backgroundColor;
          }}
        >
          Normal Button
        </button>
        <button
          style={buttonStyles(isSecondButtonDisabled)}
          disabled={isSecondButtonDisabled}
          onClick={handleSecondButtonClick}
          onMouseOver={(e) => {
            if (!isSecondButtonDisabled) {
              e.target.style.color = hoverStyles.color;
              e.target.style.backgroundColor = hoverStyles.backgroundColor;
            }
          }}
          onMouseOut={(e) => {
            if (!isSecondButtonDisabled) {
              e.target.style.color = buttonStyles(isSecondButtonDisabled).color;
              e.target.style.backgroundColor = buttonStyles(
                isSecondButtonDisabled
              ).backgroundColor;
            }
          }}
          onMouseDown={(e) =>
            (e.target.style.backgroundColor = activeStyles.backgroundColor)
          }
          onMouseUp={(e) => {
            if (!isSecondButtonDisabled) {
              e.target.style.backgroundColor = hoverStyles.backgroundColor;
            }
          }}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}

export default PrimaryOutlineBtn;
