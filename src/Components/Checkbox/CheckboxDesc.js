import React, { useState } from "react";

const checkboxStyles = {
  width: "20px",
  height: "20px",
  cursor: "pointer",
  marginRight: "10px",
};

const labelStyles = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
};

function CheckboxDesc() {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({
      ...checkboxes,
      [name]: checked,
    });
  };

  return (
    <>
      <h3>Checkbox + Label + Desc</h3>
      <div
        style={{
          display: "flex",
          width: "600px",
          justifyContent: "space-between",
        }}
      >
        <div style={labelStyles}>
          <input
            type="checkbox"
            name="checkbox1"
            checked={checkboxes.checkbox1}
            onChange={handleCheckboxChange}
            style={checkboxStyles}
          />
          <p style={{ margin: "3px" }}>
            Checkbox is {checkboxes.checkbox1 ? "checked" : "unchecked"}.
          </p>
        </div>

        <div style={labelStyles}>
          <label>
            <span>Label </span>
            <input
              type="checkbox"
              name="checkbox2"
              checked={checkboxes.checkbox2}
              onChange={handleCheckboxChange}
              style={checkboxStyles}
            />
          </label>
          <p style={{ margin: "3px" }}>
            Checkbox is {checkboxes.checkbox2 ? "checked" : "unchecked"}.
          </p>
        </div>

        <div style={labelStyles}>
          <label>
            <input
              type="checkbox"
              name="checkbox3"
              checked={checkboxes.checkbox3}
              onChange={handleCheckboxChange}
              style={checkboxStyles}
            />
            <span>Label </span>
          </label>
          <p style={{ margin: "3px" }}>
            Checkbox is {checkboxes.checkbox3 ? "checked" : "unchecked"}.
          </p>
        </div>
      </div>
    </>
  );
}

export default CheckboxDesc;
