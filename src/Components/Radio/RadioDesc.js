import React, { useState } from "react";

const radioStyles = {
  width: "20px",
  height: "20px",
  cursor: "pointer",
};

function RadioDesc() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (event) => {
    const { value } = event.target;
    setSelectedValue((prevValue) => (prevValue === value ? "" : value));
  };

  const labelStyles = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    flexDirection: "column",
  };

  return (
    <>
      <h3>Radio Button + Label + Desc</h3>
      <div
        style={{
          width: "600px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <input
            type="radio"
            value="option1"
            checked={selectedValue === "option1"}
            onChange={handleRadioChange}
            style={radioStyles}
          />
          {selectedValue === "option1" && <p>{selectedValue}</p>}
        </div>
        <div style={labelStyles}>
          <label>
            <span style={{ marginRight: "10px" }}>Label</span>
            <input
              type="radio"
              value="option2"
              checked={selectedValue === "option2"}
              onChange={handleRadioChange}
              style={radioStyles}
            />
          </label>
          {selectedValue === "option2" && <p>{selectedValue}</p>}
        </div>
        <div style={labelStyles}>
          <label>
            <input
              type="radio"
              value="option3"
              checked={selectedValue === "option3"}
              onChange={handleRadioChange}
              style={radioStyles}
            />
            <span style={{ marginLeft: "10px" }}>Label </span>
          </label>
          {selectedValue === "option3" && <p>{selectedValue}</p>}
        </div>
      </div>
    </>
  );
}

export default RadioDesc;
