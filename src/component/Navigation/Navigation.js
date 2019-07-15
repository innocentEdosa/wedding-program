import React from 'react';
import './Navigation.scss';
import Svg from '../commons/SVG';
import navItems from '../../fixtures/NavItems';

const Navigation = ({ toggleSidebar, isSideBarOpen }) => {
  const toggler = isSideBarOpen
    ? {
      fill: '#ffd700',
      width: '16',
      height: '16',
      viewBox: '0 0 16 16',
      path:
          'M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z',
    }
    : {
      width: '32',
      height: '32',
      viewBox: '0 0 24 24',
      fill: '#ffd700',
      path:
          'M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z',
    };

  return (
    <nav className="navigation">
      <div className="container">
        <div className="navigation-wrapper">
          <div className="navigation-brand" href="#">
            sammy
          </div>
          <button onClick={toggleSidebar} type="button" className="navigation-toggler">
            <Svg
              width={toggler.width}
              height={toggler.height}
              viewBox={toggler.viewBox}
              fill={toggler.fill}
              path={toggler.path}
              className="navigation-toggler-icon"
            />
          </button>
          <ul className="navigation-list">
            {navItems.map(items => (
              <li key={items} className="navigation-list-item">{items}</li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
