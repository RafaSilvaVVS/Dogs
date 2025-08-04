import React from 'react';
import LogoHeader from './LogoHeader';
import LinkHeader from './linkHeader';
import { Link } from 'react-router-dom';
import './Header.css';
import { GlobalContext } from '../hooks/userContext';

const Header = () => {
  const userContext = React.useContext(GlobalContext);

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
            {window.localStorage.getItem('token') ? (
              <Link to="login">
                <LinkHeader texto={userContext} />
              </Link>
            ) : (
              <Link to="/conta/">
                <LinkHeader texto="Login / Criar" />
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
