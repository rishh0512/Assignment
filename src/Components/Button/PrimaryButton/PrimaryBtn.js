import React, { useState } from "react";

const PrimaryBtn = () => {
  const [isSecondButtonDisabled, setIsSecondButtonDisabled] = useState(false);

  const handleSecondButtonClick = () => {
    setIsSecondButtonDisabled(true);
  };

  const buttonStyles = (isDisabled) => ({
    backgroundColor: isDisabled ? "#a0b9ff" : "#5a75f7",
    color: isDisabled ? "#d1d1d1" : "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "10px",
    cursor: isDisabled ? "not-allowed" : "pointer",
    fontSize: "16px",
    outline: "none",
    width: "200px",
  });

  const hoverStyles = {
    backgroundColor: "#4a65e7",
  };

  const activeStyles = {
    backgroundColor: "#3a55c7",
  };

  return (
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
          (e.target.style.backgroundColor = buttonStyles(false).backgroundColor)
        }
        onMouseDown={(e) =>
          (e.target.style.backgroundColor = activeStyles.backgroundColor)
        }
        onMouseUp={(e) =>
          (e.target.style.backgroundColor = hoverStyles.backgroundColor)
        }
      >
        Normal Button
      </button>
      <button
        style={buttonStyles(isSecondButtonDisabled)}
        disabled={isSecondButtonDisabled}
        onMouseOver={(e) =>
          !isSecondButtonDisabled &&
          (e.target.style.backgroundColor = hoverStyles.backgroundColor)
        }
        onMouseOut={(e) =>
          !isSecondButtonDisabled &&
          (e.target.style.backgroundColor = buttonStyles(
            isSecondButtonDisabled
          ).backgroundColor)
        }
        onMouseDown={(e) =>
          !isSecondButtonDisabled &&
          (e.target.style.backgroundColor = activeStyles.backgroundColor)
        }
        onMouseUp={(e) =>
          !isSecondButtonDisabled &&
          (e.target.style.backgroundColor = hoverStyles.backgroundColor)
        }
        onClick={handleSecondButtonClick}
      >
        {isSecondButtonDisabled ? "Disabled" : "Click to Disable"}
      </button>
    </div>
  );
};

export default PrimaryBtn;
