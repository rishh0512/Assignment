import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

const Tab1Icon = () => {
  const [activeTabLeft, setActiveTabLeft] = useState(0);
  const [activeTabRight, setActiveTabRight] = useState(0);
  const tabsLeft = ["Tab 1", "Tab 2", "Tab 3"];
  const tabsRight = ["Tab 1", "Tab 2", "Tab 3"];
  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
   
  };

  const tabsStyles = {
    display: "flex",
    justifyContent: "space-around",
    width: "600px",
  
  };

  const tabStyles = (isActive) => ({
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    cursor: "pointer",
    borderBottom: isActive ? "2px solid blue" : "2px solid transparent",
    color: isActive ? "blue" : "black",
    transition: "all 0.3s ease",

  });

  const iconStyles = {
    margin: "0px 8px",
  };

  const contentStyles = {
    padding: "0px 20px",
    fontSize: "16px",
  };

  return (
   
    <div style={containerStyles}>
     <div style={{margin:'20px'}}>
     <div style={tabsStyles}>
        {tabsLeft.map((tab, index) => (
          <div
            key={index}
            style={tabStyles(activeTabLeft === index)}
            onClick={() => setActiveTabLeft(index)}
          >
            <FaHeart style={iconStyles} />
            {tab}
          </div>
        ))}
      </div>
      <div style={contentStyles}>Contents of {tabsLeft[activeTabLeft]}</div>
     </div>
      <div>
      <div style={tabsStyles}>
        {tabsRight.map((tab, index) => (
          <div
            key={index}
            style={tabStyles(activeTabRight === index)}
            onClick={() => setActiveTabRight(index)}
          >
            {tab}
            <FaHeart style={iconStyles} />
          </div>
        ))}
      </div>
      <div style={contentStyles}>Contents of {tabsRight[activeTabRight]}</div>
      </div>
      
    </div>
  );
};

export default Tab1Icon;
