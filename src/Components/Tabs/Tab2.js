import React, { useState } from 'react';

const tabStyles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    width:'800px',
    marginBlock: "20px",
  },
  tabs: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#f5f7fa',
    padding: '10px 0',
  },
  tab: {
    flex: 1,
    textAlign: 'center',
    padding: '10px 20px',
    cursor: 'pointer',
    color: '#9fa7b3',
    backgroundColor: '#f5f7fa',
    borderRadius:'8px'
  },
  activeTab: {
    color: 'white',
    backgroundColor: '#4a6cf7',
  },
  tabContent: {
    marginTop: '20px',
  },
};

const Tab2 = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <>  
      <h3>Tab Style2</h3>
     <div style={tabStyles.container}>
    <div style={tabStyles.tabs}>
      <div
        style={{ ...tabStyles.tab, ...(activeTab === 1 ? tabStyles.activeTab : {}) }}
        onClick={() => handleTabClick(1)}
      >
        Tab 1
      </div>
      <div
        style={{ ...tabStyles.tab, ...(activeTab === 2 ? tabStyles.activeTab : {}) }}
        onClick={() => handleTabClick(2)}
      >
        Tab 2
      </div>
      <div
        style={{ ...tabStyles.tab, ...(activeTab === 3 ? tabStyles.activeTab : {}) }}
        onClick={() => handleTabClick(3)}
      >
        Tab 3
      </div>
    </div>
    <div style={tabStyles.tabContent}>
      {activeTab === 1 && <div>Content for Tab 1</div>}
      {activeTab === 2 && <div>Content for Tab 2</div>}
      {activeTab === 3 && <div>Content for Tab 3</div>}
    </div>
  </div>

    </>
 
  );
};

export default Tab2;
