import React from 'react';
import './Sidebar.scss';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <section className="sidebar-main">
        <div className="sidebar-logo-wrapper">
          <p className="sidebar-logo">sammy</p>
        </div>
          <nav className="sidebar-navigation">
            <ul className="sidebar-navigation-list">
              <li className="sidebar-navigation-item"><a href="#">Home</a></li>
              <li className="sidebar-navigation-item"><a href="#">Order of service</a></li>
              <li className="sidebar-navigation-item"><a href="#">Bridal Train</a></li>
            </ul>
          </nav>
      </section>
      <aside className="sidebar-aside">
              sammy and prince
      </aside>
      </div>
    </div>
  );
}

export default SideBar;