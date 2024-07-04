import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

function IconBtnOutline() {
  const [isLeftButtonDisabled, setIsLeftButtonDisabled] = useState(false);
  const [isRightButtonDisabled, setIsRightButtonDisabled] = useState(false);

  const handleLeftButtonClick = () => {
    setIsLeftButtonDisabled(!isLeftButtonDisabled);
  };

  const handleRightButtonClick = () => {
    setIsRightButtonDisabled(!isRightButtonDisabled);
  };

  const buttonStyles = (isDisabled) => ({
    color: isDisabled ? "#78c186" : "#5cb85c",
    padding: "10px 20px",
    border: "none",
    borderRadius: "10px",
    cursor: isDisabled ? "not-allowed" : "pointer",
    fontSize: "16px",
    outline: `1px solid ${isDisabled ? "#78c186" : "#5cb85c"}`,
    backgroundColor: "transparent",
    transition: "none",
    pointerEvents: isDisabled ? "none" : "auto",
    display: "flex",
    alignItems: "center",
    width: "200px",
  });

  const buttonLabelLeft = isLeftButtonDisabled
    ? "Disabled"
    : "Click to Disable";

  const buttonLabelRight = isRightButtonDisabled
    ? "Disabled"
    : "Click to Disable";

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBlock: "10px",
        }}
      >
        <button
          style={buttonStyles(false)}
          onMouseOut={(e) =>
            (e.target.style.backgroundColor =
              buttonStyles(false).backgroundColor)
          }
        >
          <FaHeart />
          <span style={{ marginLeft: "5px" }}>Normal Button</span>
        </button>
        <button
          style={buttonStyles(isLeftButtonDisabled)}
          disabled={isLeftButtonDisabled}
          onMouseOut={(e) =>
            !isLeftButtonDisabled &&
            (e.target.style.backgroundColor =
              buttonStyles(isLeftButtonDisabled).backgroundColor)
          }
          onClick={handleLeftButtonClick}
        >
          <FaHeart />
          <span style={{ marginLeft: "5px" }}>{buttonLabelLeft}</span>
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBlock: "10px",
        }}
      >
        <button
          style={buttonStyles(false)}
          onMouseOut={(e) =>
            (e.target.style.backgroundColor =
              buttonStyles(false).backgroundColor)
          }
        >
          <span style={{ marginRight: "5px" }}>Normal Button</span>
          <FaHeart />
        </button>
        <button
          style={buttonStyles(isRightButtonDisabled)}
          disabled={isRightButtonDisabled}
          onMouseOut={(e) =>
            !isRightButtonDisabled &&
            (e.target.style.backgroundColor = buttonStyles(
              isRightButtonDisabled
            ).backgroundColor)
          }
          onClick={handleRightButtonClick}
        >
          <span style={{ marginRight: "5px" }}>{buttonLabelRight}</span>
          <FaHeart />
        </button>
      </div>
    </>
  );
}

export default IconBtnOutline;
