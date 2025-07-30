import React from 'react';
import './MenuMobile.css';
import ModalMenu from './ModalMenuMobile/ModalMenu';

const MenuMobile = () => {
  const [modalMenu, setModal] = React.useState(false);

  function menuAbrir() {
    setModal((ant) => !ant);
  }
  return (
    <div className="container-mobile">
      <div
        onClick={menuAbrir}
        className={
          modalMenu === true
            ? 'div-menu-mobile ativo rotacionar '
            : 'div-menu-mobile'
        }
      ></div>
      {modalMenu && <ModalMenu />}
    </div>
  );
};

export default MenuMobile;
