import React, { useState } from "react";
import "./Dropdown.css";
function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("This Week");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="dropdown"
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    >
      <span>{selectedOption}</span>
      <i className={`arrow ${isDropdownOpen ? "up" : "down"}`}></i>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          {["This Week", "Last Month", "Last Year"].map((option) => (
            <div
              key={option}
              className={`dropdown-option ${
                selectedOption === option ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {selectedOption === option && <span>&#10003;</span>} {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
