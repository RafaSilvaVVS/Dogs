import React from 'react';
import './Menu.css';

const Menu = ({ src, title }) => {
  return <img className="li-menu" src={src} alt={title} />;
};

export default Menu;
