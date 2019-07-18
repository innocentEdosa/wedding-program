import React, { useState, Fragment } from 'react';
import Navigation from '../../component/Navigation/Navigation';
import SideBar from '../../component/SideBar/Sidebar';
import Backdrop from '../../component/commons/Backdrop/Backdrop';

const NavigationContainer = () => {
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
    <Fragment>
      <Navigation
        toggleSidebar={toggleSidebar}
        isSideBarOpen={navState.displaySidebar}
      />
      <SideBar
        displaySidebar={navState.displaySidebar}
        closeSidebar={toggleSidebar}
      />
      <Backdrop hideBackdrop={toggleSidebar} displayBackdrop={navState.displaySidebar} />
    </Fragment>
  );
};

export default NavigationContainer;
