import React from 'react';
import LogoHeader from './LogoHeader';
import LinkHeader from './linkHeader';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="container-header">
        <ul className="lista-Header">
          <li>
            <LogoHeader />
          </li>
          <li>
            <LinkHeader />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
