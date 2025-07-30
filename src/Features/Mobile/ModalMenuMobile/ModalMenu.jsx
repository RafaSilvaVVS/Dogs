import React from 'react';
import './ModalMenu.css';
import Menu from '../../Conta/MenuConta/Menu';
import Feed from '../../../assets/feed.svg';
import Estatisticas from '../../../assets/estatisticas.svg';
import Adicionar from '../../../assets/adicionar.svg';
import { NavLink } from 'react-router-dom';

const ModalMenu = () => {
  return (
    <ul className="ul-menu-modal">
      <li>
        <NavLink end to="/conta">
          <Menu src={Feed} title="Icone feed" />
          <span>Minhas fotos</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/conta/estatisticas">
          <Menu src={Estatisticas} title="Icone feed" />
          <span>Estatisticas</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/conta/postar">
          <Menu src={Adicionar} title="Icone feed" />
          <span>Postagens</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default ModalMenu;
