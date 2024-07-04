import React, { useState } from "react";

const radioStyles = {
  width: "20px",
  height: "20px",
  cursor: "pointer",
};

function RadioBtn() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const labelStyles = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  };

  return (
    <>
      <h1>Radio Buttons</h1>
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
        </div>
      </div>
    </>
  );
}

export default RadioBtn;
