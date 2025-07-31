import React from 'react';
import LogoHeader from './LogoHeader';
import LinkHeader from './linkHeader';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="container-header">
        <ul className="lista-Header">
          <li>
            <Link to="/">
              <LogoHeader />
            </Link>
          </li>
          <li>
            <Link to="login">
              <LinkHeader />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
