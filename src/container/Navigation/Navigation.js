import React, { useState } from 'react';
import Navigation from '../../component/Navigation/Navigation';
import SideBar from '../../component/SideBar/Sidebar';

const Home = () => {
  const [navState, setNavState] = useState({
    displaySidebar: false,
  });

  const toggleSidebar = () => {
    setNavState({
      ...navState,
      displaySidebar: !navState.displaySidebar,
    });
  };

  return (
    <div>
      <Navigation
        toggleSidebar={toggleSidebar}
        isSideBarOpen={navState.displaySidebar}
      />
      <SideBar
        displaySidebar={navState.displaySidebar}
        closeSidebar={toggleSidebar}
      />
    </div>
  );
};

export default Home;
