
import React from 'react';
import './Navigation.scss';
import Svg from '../commons/SVG';
import navItems from '../../fixtures/NavItems'
const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="container">
        <div className="navigation-wrapper">
          <div className="navigation-brand" href="#">
              sammy
          </div>
          <button type="button" className="navigation-toggler">
            <Svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="#ffd700"
            path="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"
            className="navigation-toggler-icon"
            />
          </button>
          <ul className="navigation-list">
            {navItems.map(items => <li className="navigation-list-item">
              { items }
            </li>)}
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navigation;