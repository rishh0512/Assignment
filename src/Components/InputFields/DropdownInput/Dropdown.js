import React, { useState } from 'react';

const dropdownStyle = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  dropdownWrapper: {
    width: '500px',
    margin: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
  },
  header: {
    padding: '10px',
    backgroundColor: 'white',
    cursor: 'pointer',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  list: {
    position: 'absolute',
    top: '100%',
    left: '0',
    width: '100%',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderTop: 'none',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    zIndex: '1000',
    margin:'auto'
  },
  item: {
    padding: '10px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemHover: {
    backgroundColor: '#f0f0f0',
  },
  checkbox: {
    marginLeft: '10px',
  },
  checkedItem: {
    color: 'black',
  },
  uncheckedItem: {
    color: '#666',
  },
};

const Dropdown = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7'];
  const checkboxItems = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(items[0]); 
  const [hoverIndex, setHoverIndex] = useState(null);

  const [isCheckboxOpen, setIsCheckboxOpen] = useState(false);
  const [selectedCheckboxOptions, setSelectedCheckboxOptions] = useState([]);

  const [isRightCheckboxOpen, setIsRightCheckboxOpen] = useState(false);
  const [selectedRightCheckboxOptions, setSelectedRightCheckboxOptions] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleCheckboxDropdown = () => {
    setIsCheckboxOpen(!isCheckboxOpen);
  };

  const toggleRightCheckboxDropdown = () => {
    setIsRightCheckboxOpen(!isRightCheckboxOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleCheckboxChange = (option) => {
    setSelectedCheckboxOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(option)
        ? prevSelectedOptions.filter((item) => item !== option)
        : [...prevSelectedOptions, option]
    );
  };

  const handleRightCheckboxChange = (option) => {
    setSelectedRightCheckboxOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(option)
        ? prevSelectedOptions.filter((item) => item !== option)
        : [...prevSelectedOptions, option]
    );
  };

  return (
    <div style={dropdownStyle.container}>
      <div style={dropdownStyle.dropdownWrapper}>
        <div style={dropdownStyle.header} onClick={toggleDropdown}>
          {selectedOption}
        </div>
        {isOpen && (
          <div style={dropdownStyle.list}>
            {items.map((item, index) => (
              <div
                key={item}
                style={{
                  ...dropdownStyle.item,
                  ...(hoverIndex === index && dropdownStyle.itemHover),
                }}
                onClick={() => handleOptionClick(item)}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={dropdownStyle.dropdownWrapper}>
        <div style={dropdownStyle.header} onClick={toggleCheckboxDropdown}>
          Select Options
        </div>
        {isCheckboxOpen && (
          <div style={dropdownStyle.list}>
            {checkboxItems.map((item) => (
              <div key={item} style={{ ...dropdownStyle.item, ...(selectedCheckboxOptions.includes(item) ? dropdownStyle.checkedItem : dropdownStyle.uncheckedItem) }}>
                <input
                  type="checkbox"
                  checked={selectedCheckboxOptions.includes(item)}
                  onChange={() => handleCheckboxChange(item)}
                  style={dropdownStyle.checkbox}
                />
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={dropdownStyle.dropdownWrapper}>
        <div style={dropdownStyle.header} onClick={toggleRightCheckboxDropdown}>
          Select Options
        </div>
        {isRightCheckboxOpen && (
          <div style={dropdownStyle.list}>
            {checkboxItems.map((item) => (
              <div key={item} style={{ ...dropdownStyle.item, ...(selectedRightCheckboxOptions.includes(item) ? dropdownStyle.checkedItem : dropdownStyle.uncheckedItem) }}>
                {item}
                <input
                  type="checkbox"
                  checked={selectedRightCheckboxOptions.includes(item)}
                  onChange={() => handleRightCheckboxChange(item)}
                  style={dropdownStyle.checkbox}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
