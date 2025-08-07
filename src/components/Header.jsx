import React from 'react';
import LogoHeader from './LogoHeader';
import LinkHeader from './linkHeader';
import { Link } from 'react-router-dom';
import './Header.css';
import { GlobalContext } from '../hooks/userContext';

const Header = () => {
  const { nome } = React.useContext(GlobalContext);
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
              <Link to="/conta/">
                <LinkHeader texto={nome} />
              </Link>
            ) : (
              <Link to="login">
                <LinkHeader texto="Login / Conta" />
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
