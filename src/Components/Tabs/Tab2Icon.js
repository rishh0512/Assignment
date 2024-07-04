import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const tabIconStyles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    width: '800px',
    marginBlock: '20px',
  },
  tabs: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#f5f7fa',
    padding: '10px 0',
  },
  tab: {
    padding: '10px 0',
    cursor: 'pointer',
    color: '#9fa7b3',
    backgroundColor: '#f5f7fa',
    flex: 1,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
  },
  activeTab: {
    color: 'white',
    backgroundColor: '#4a6cf7',
  },
  tabContent: {
    marginTop: '20px',
  },
  icon: {
    marginRight: '8px',
  },
};

const Tab2Icon = () => {
  const [activeTab1, setActiveTab1] = useState(1);
  const [activeTab2, setActiveTab2] = useState(4);

  const handleTabClick1 = (tabNumber) => {
    setActiveTab1(tabNumber);
  };

  const handleTabClick2 = (tabNumber) => {
    setActiveTab2(tabNumber);
  };

  return (
    <>
      <div style={tabIconStyles.container}>
        <div style={tabIconStyles.tabs}>
          <div
            style={{ ...tabIconStyles.tab, ...(activeTab1 === 1 ? tabIconStyles.activeTab : {}) }}
            onClick={() => handleTabClick1(1)}
          >
            <FaHeart style={tabIconStyles.icon} /> Tab 1
          </div>
          <div
            style={{ ...tabIconStyles.tab, ...(activeTab1 === 2 ? tabIconStyles.activeTab : {}) }}
            onClick={() => handleTabClick1(2)}
          >
            <FaHeart style={tabIconStyles.icon} /> Tab 2
          </div>
          <div
            style={{ ...tabIconStyles.tab, ...(activeTab1 === 3 ? tabIconStyles.activeTab : {}) }}
            onClick={() => handleTabClick1(3)}
          >
            <FaHeart style={tabIconStyles.icon} /> Tab 3
          </div>
        </div>
        <div style={tabIconStyles.tabContent}>
          {activeTab1 === 1 && <div>Content for Tab 1</div>}
          {activeTab1 === 2 && <div>Content for Tab 2</div>}
          {activeTab1 === 3 && <div>Content for Tab 3</div>}
        </div>
      </div>
      <div style={tabIconStyles.container}>
        <div style={tabIconStyles.tabs}>
          <div
            style={{ ...tabIconStyles.tab, ...(activeTab2 === 4 ? tabIconStyles.activeTab : {}) }}
            onClick={() => handleTabClick2(4)}
          >
            <FaHeart style={tabIconStyles.icon} /> Tab 1
          </div>
          <div
            style={{ ...tabIconStyles.tab, ...(activeTab2 === 5 ? tabIconStyles.activeTab : {}) }}
            onClick={() => handleTabClick2(5)}
          >
            <FaHeart style={tabIconStyles.icon} /> Tab 2
          </div>
          <div
            style={{ ...tabIconStyles.tab, ...(activeTab2 === 6 ? tabIconStyles.activeTab : {}) }}
            onClick={() => handleTabClick2(6)}
          >
            <FaHeart style={tabIconStyles.icon} /> Tab 3
          </div>
        </div>
        <div style={tabIconStyles.tabContent}>
          {activeTab2 === 4 && <div>Content for Tab 1</div>}
          {activeTab2 === 5 && <div>Content for Tab 2</div>}
          {activeTab2 === 6 && <div>Content for Tab 3</div>}
        </div>
      </div>
    </>
  );
};

export default Tab2Icon;
