import React from 'react';
import LogoHeader from './LogoHeader';
import LinkHeader from './linkHeader';
import { Link } from 'react-router-dom';
import './Header.css';
import { GlobalContext } from '../hooks/userContext';
import PropTypes from 'prop-types';

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
              <Link to="/conta/">
                <LinkHeader texto="fwokakf" />
              </Link>
            ) : (
              <Link to="login">
                <LinkHeader texto={'opa'} />
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
