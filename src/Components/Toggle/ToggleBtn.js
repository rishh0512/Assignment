import React, { useState } from "react";

const ToggleBtn = () => {
  const [isOn1, setIsOn1] = useState(false);
  const [isOn2, setIsOn2] = useState(false);

  const handleToggle1 = () => {
    setIsOn1(!isOn1);
  };

  const handleToggle2 = () => {
    setIsOn2(!isOn2);
  };

  const toggleStyles = {
    container: {
      width: "60px",
      height: "30px",
      borderRadius: "15px",
      backgroundColor: "#d1d1d1",
      display: "flex",
      alignItems: "center",
      padding: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    containerOn: {
      backgroundColor: "#4a66ea",
    },
    thumb: {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      backgroundColor: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "transform 0.3s",
    },
    thumbOn: {
      transform: "translateX(30px)",
    },
    icon: {
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      backgroundColor: "#d1d1d1",
    },
    iconOn: {
      backgroundColor: "#4a66ea",
    },
  };

  return (
    <>
      <h1>Toggle</h1>
      <div
        style={{
          display: "flex",
          width: "600px",
          justifyContent: "space-between",
          marginBlock: "20px",
        }}
      >
        <div
          style={{
            ...toggleStyles.container,
            ...(isOn1 ? toggleStyles.containerOn : {}),
          }}
          onClick={handleToggle1}
        >
          <div
            style={{
              ...toggleStyles.thumb,
              ...(isOn1 ? toggleStyles.thumbOn : {}),
            }}
          >
            <span>{isOn1 ? "✔" : "✖"}</span>
          </div>
        </div>

        <div
          style={{
            ...toggleStyles.container,
            ...(isOn2 ? toggleStyles.containerOn : {}),
          }}
          onClick={handleToggle2}
        >
          <div
            style={{
              ...toggleStyles.thumb,
              ...(isOn2 ? toggleStyles.thumbOn : {}),
            }}
          >
            <div
              style={{
                ...toggleStyles.icon,
                ...(isOn2 ? toggleStyles.iconOn : {}),
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToggleBtn;
