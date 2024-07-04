import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

const IconBtn = () => {
  const [isLeftButtonDisabled, setIsLeftButtonDisabled] = useState(false);
  const [isRightButtonDisabled, setIsRightButtonDisabled] = useState(false);

  const handleLeftButtonClick = () => {
    setIsLeftButtonDisabled(!isLeftButtonDisabled);
  };

  const handleRightButtonClick = () => {
    setIsRightButtonDisabled(!isRightButtonDisabled);
  };

  const buttonStyles = (isDisabled) => ({
    backgroundColor: isDisabled ? "#ffcccc" : "#ff6666",
    color: isDisabled ? "#d1d1d1" : "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "10px",
    cursor: isDisabled ? "not-allowed" : "pointer",
    fontSize: "16px",
    outline: "none",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "background-color 0.3s ease",
    width: "200px",
  });

  const hoverStyles = {
    backgroundColor: "#e74c3c",
  };

  const activeStyles = {
    backgroundColor: "#c0392b",
  };

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
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = hoverStyles.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor =
              buttonStyles(false).backgroundColor)
          }
          onMouseDown={(e) =>
            (e.target.style.backgroundColor = activeStyles.backgroundColor)
          }
          onMouseUp={(e) =>
            (e.target.style.backgroundColor = hoverStyles.backgroundColor)
          }
        >
          <FaHeart />
          Normal Button
        </button>
        <button
          style={buttonStyles(isLeftButtonDisabled)}
          disabled={isLeftButtonDisabled}
          onMouseOver={(e) =>
            !isLeftButtonDisabled &&
            (e.target.style.backgroundColor = hoverStyles.backgroundColor)
          }
          onMouseOut={(e) =>
            !isLeftButtonDisabled &&
            (e.target.style.backgroundColor =
              buttonStyles(isLeftButtonDisabled).backgroundColor)
          }
          onMouseDown={(e) =>
            !isLeftButtonDisabled &&
            (e.target.style.backgroundColor = activeStyles.backgroundColor)
          }
          onMouseUp={(e) =>
            !isLeftButtonDisabled &&
            (e.target.style.backgroundColor = hoverStyles.backgroundColor)
          }
          onClick={handleLeftButtonClick}
        >
          <FaHeart />
          {isLeftButtonDisabled ? "Disabled" : "Click to Disable"}
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
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = hoverStyles.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor =
              buttonStyles(false).backgroundColor)
          }
          onMouseDown={(e) =>
            (e.target.style.backgroundColor = activeStyles.backgroundColor)
          }
          onMouseUp={(e) =>
            (e.target.style.backgroundColor = hoverStyles.backgroundColor)
          }
        >
          Normal Button
          <FaHeart />
        </button>
        <button
          style={buttonStyles(isRightButtonDisabled)}
          disabled={isRightButtonDisabled}
          onMouseOver={(e) =>
            !isRightButtonDisabled &&
            (e.target.style.backgroundColor = hoverStyles.backgroundColor)
          }
          onMouseOut={(e) =>
            !isRightButtonDisabled &&
            (e.target.style.backgroundColor = buttonStyles(
              isRightButtonDisabled
            ).backgroundColor)
          }
          onMouseDown={(e) =>
            !isRightButtonDisabled &&
            (e.target.style.backgroundColor = activeStyles.backgroundColor)
          }
          onMouseUp={(e) =>
            !isRightButtonDisabled &&
            (e.target.style.backgroundColor = hoverStyles.backgroundColor)
          }
          onClick={handleRightButtonClick}
        >
          {isRightButtonDisabled ? "Disabled" : "Click to Disable"}
          <FaHeart />
        </button>
      </div>
    </>
  );
};

export default IconBtn;
