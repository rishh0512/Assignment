import React, { useState } from "react";

const Tab1 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
    justifyContent: "center",
  };

  const tabsStyles = {
    display: "flex",
    justifyContent: "space-around",
    width: "600px",
  };

  const tabStyles = (isActive) => ({
    padding: "10px 20px",
    cursor: "pointer",
    borderBottom: isActive ? "2px solid blue" : "2px solid transparent",
    color: isActive ? "blue" : "black",
    transition: "all 0.3s ease",
  });

  const contentStyles = {
    padding: "0px 20px",
    fontSize: "16px",
  };

  return (
    <>
    <h3>Tab Style1</h3>
           <div style={containerStyles}>
      <div style={tabsStyles}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            style={tabStyles(activeTab === index)}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div style={contentStyles}>Contents of {tabs[activeTab]}</div>
    </div>
    </>
 
  );
};

export default Tab1;
