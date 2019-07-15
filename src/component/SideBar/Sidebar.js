import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './Sidebar.scss';
import navItems from '../../fixtures/NavItems';

const SideBar = ({ displaySidebar, closeSidebar }) => {
  
  const ref = useRef();
  const sideBar = (e) => {
    e.preventPropagation();
    console.log(ref);
    if (ref.current) {
      closeSidebar();
    }
  }
  return (
  <div
  ref={ref}
    onClick={sideBar}
    className="sidebar"
    style={{ display: displaySidebar ? "block" : "none" }}
  >
    <div className="sidebar-wrapper">
      <section className="sidebar-main">
        <div className="sidebar-logo-wrapper">
          <p className="sidebar-logo">sammy</p>
        </div>
        <nav className="sidebar-navigation">
          <ul className="sidebar-navigation-list">
            {navItems.map(items => (
              <li key={items} className="sidebar-navigation-item">
                <a href="#">{items}</a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <aside className="sidebar-aside">sammy and prince</aside>
    </div>
  </div>
)
};

SideBar.propTypes = {
  displaySidebar: PropTypes.bool.isRequired,
  closeSidebar: PropTypes.func.isRequired,
};

export default SideBar;
