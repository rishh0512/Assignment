import React, { useState } from "react";

const ToggleDesc = () => {
  const [isOn1, setIsOn1] = useState(false);
  const [isOn2, setIsOn2] = useState(false);
  const [isOn3, setIsOn3] = useState(false);
  const [isOn4, setIsOn4] = useState(false);
  const [isOn5, setIsOn5] = useState(false);
  const [isOn6, setIsOn6] = useState(false);
  const [isOn7, setIsOn7] = useState(false);
  const [isOn8, setIsOn8] = useState(false);
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
  const handleToggle5 = () => {
    setIsOn5(!isOn5);
  };
  const handleToggle6 = () => {
    setIsOn6(!isOn6);
  };

  const handleToggle7 = () => {
    setIsOn7(!isOn7);
  };
  const handleToggle8 = () => {
    setIsOn8(!isOn8);
  };


  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",

      marginBottom: "20px",
    },
    label: {
      fontSize: "16px",
      color: "#333",
      marginBottom: "5px",
    },
    toggleContainer: {
      width: "60px",
      height: "30px",
      borderRadius: "15px",
      backgroundColor: "#d1d1d1",
      display: "flex",

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
      transition: "transform 0.3s",
    },
    thumbOn: {
      transform: "translateX(30px)",
    },
    description: {
      marginTop: "5px",
      color: "#666",
      fontSize: "14px",
    },
  };

  return (
    <>
    <h3>Toggle + Label + Desc</h3>
 <div style={{display:'flex',justifyContent:'space-between',width:'600px'}}>
 <div>
      <div style={styles.container}>
        <div style={{ display: "flex", gap: "20px" }}>
          <span style={styles.label}>Label </span>
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

        <div style={styles.description}>Description for Label toggle</div>
      </div>

      <div style={styles.container}>
        <div style={{ display: "flex", gap: "20px" }}>
          <span style={styles.label}>Label </span>
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
              
            >
                 <span>{isOn2 ? "✔" : "✖"}</span>
            </div>
          </div>
        </div>

        <div style={styles.description}>Description for Label toggle</div>
      </div>

      <div style={styles.container}>
        <div style={{ display: "flex", gap: "20px" }}>
          <span style={styles.label}>Label </span>
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
        </div>

        <div style={styles.description}>Description for Label toggle</div>
      </div>

      <div style={styles.container}>
        <div style={{ display: "flex", gap: "20px" }}>
          <span style={styles.label}>Label </span>
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
            >
                 <span>{isOn4 ? "✔" : "✖"}</span>
            </div>
          </div>
        </div>

        <div style={styles.description}>Description for Label toggle</div>
      </div>
    </div>
    <div>
      <div style={styles.container}>
        <div style={{ display: "flex", gap: "20px" }}>
          <span style={styles.label}>Label </span>
          <div
            style={{
              ...styles.toggleContainer,
              ...(isOn5 ? styles.toggleContainerOn : {}),
            }}
            onClick={handleToggle5}
          >
            <div
              style={{
                ...styles.thumb,
                ...(isOn5 ? styles.thumbOn : {}),
              }}
            >
              
            </div>
          </div>
        </div>

        <div style={styles.description}>Description for Label toggle</div>
      </div>

      <div style={styles.container}>
        <div style={{ display: "flex", gap: "20px" }}>
          <span style={styles.label}>Label </span>
          <div
            style={{
              ...styles.toggleContainer,
              ...(isOn6 ? styles.toggleContainerOn : {}),
            }}
            onClick={handleToggle6}
          >
            <div
              style={{
                ...styles.thumb,
                ...(isOn6 ? styles.thumbOn : {}),
              }}
              
            >
                
            </div>
          </div>
        </div>

        <div style={styles.description}>Description for Label toggle</div>
      </div>

      <div style={styles.container}>
        <div style={{ display: "flex", gap: "20px" }}>
          <span style={styles.label}>Label </span>
          <div
            style={{
              ...styles.toggleContainer,
              ...(isOn7 ? styles.toggleContainerOn : {}),
            }}
            onClick={handleToggle7}
          >
            <div
              style={{
                ...styles.thumb,
                ...(isOn7 ? styles.thumbOn : {}),
              }}
            >
             
            </div>
          </div>
        </div>

        <div style={styles.description}>Description for Label toggle</div>
      </div>

      <div style={styles.container}>
        <div style={{ display: "flex", gap: "20px" }}>
          <span style={styles.label}>Label </span>
          <div
            style={{
              ...styles.toggleContainer,
              ...(isOn8 ? styles.toggleContainerOn : {}),
            }}
            onClick={handleToggle8}
          >
            <div
              style={{
                ...styles.thumb,
                ...(isOn8 ? styles.thumbOn : {}),
              }}
            >
                 
            </div>
          </div>
        </div>

        <div style={styles.description}>Description for Label toggle</div>
      </div>
    </div>
    </div>
    </>
   
   
  );
};

export default ToggleDesc;
