import React from 'react';
import './MenuMobile.css';
import ModalMenu from './ModalMenuMobile/ModalMenu';

const MenuMobile = () => {
  return (
    <div className="container-mobile">
      <div className="div-menu-mobile"></div>
      <ModalMenu />
    </div>
  );
};

export default MenuMobile;
