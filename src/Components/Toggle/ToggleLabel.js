import React, { useState } from "react";

const ToggleLabel = () => {
  const [isOn1, setIsOn1] = useState(false);
  const [isOn2, setIsOn2] = useState(false);
  const [isOn3, setIsOn3] = useState(false);
  const [isOn4, setIsOn4] = useState(false);

  const handleToggle1 = () => {
    setIsOn1(!isOn1);
  };

  const handleToggle2 = () => {
    setIsOn2(!isOn2);
  };

  const handleToggle3 = () => {
    setIsOn3(!isOn3);
  };

  const handleToggle4 = () => {
    setIsOn4(!isOn4);
  };

  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
    },
    labelLeft: {
      marginRight: "10px",
      fontSize: "16px",
      color: "#333",
    },
    labelRight: {
      marginLeft: "10px",
      fontSize: "16px",
      color: "#333",
    },
    toggleContainer: {
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
    toggleContainerOn: {
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
  };

  return (
    <>
    <h3>Toggle + Label</h3>
<div style={{display:'flex',justifyContent:'space-between',width:'600px',marginBlock:'20px'}}>
    <div>
    <div style={styles.container}>
        <span style={styles.labelLeft}>Label </span>
        <div
          style={{
            ...styles.toggleContainer,
            ...(isOn1 ? styles.toggleContainerOn : {}),
          }}
          onClick={handleToggle1}
        >
          <div
            style={{
              ...styles.thumb,
              ...(isOn1 ? styles.thumbOn : {}),
            }}
          >
            <span>{isOn1 ? "✔" : "✖"}</span>
          </div>
        </div>
      </div>
      <div style={styles.container}>
        <span style={styles.labelLeft}>Label </span>
        <div
          style={{
            ...styles.toggleContainer,
            ...(isOn2 ? styles.toggleContainerOn : {}),
          }}
          onClick={handleToggle2}
        >
          <div
            style={{
              ...styles.thumb,
              ...(isOn2 ? styles.thumbOn : {}),
            }}
          ></div>
        </div>
      </div>

    </div>
      
<div>
<div style={styles.container}>
        <div
          style={{
            ...styles.toggleContainer,
            ...(isOn3 ? styles.toggleContainerOn : {}),
          }}
          onClick={handleToggle3}
        >
          <div
            style={{
              ...styles.thumb,
              ...(isOn3 ? styles.thumbOn : {}),
            }}
          >
            <span>{isOn3 ? "✔" : "✖"}</span>
          </div>
        </div>
        <span style={styles.labelRight}>Label </span>
      </div>

      <div style={styles.container}>
        <div
          style={{
            ...styles.toggleContainer,
            ...(isOn4 ? styles.toggleContainerOn : {}),
          }}
          onClick={handleToggle4}
        >
          <div
            style={{
              ...styles.thumb,
              ...(isOn4 ? styles.thumbOn : {}),
            }}
          ></div>
        </div>
        <span style={styles.labelRight}>Label </span>
      </div>
</div>
     
     
    </div>
    </>
    
  );
};

export default ToggleLabel;
