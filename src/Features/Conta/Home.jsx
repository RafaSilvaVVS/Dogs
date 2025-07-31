import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './Home.css';
import Postagens from './PostsPage/Postagens';
import Estatisticas from './EstatisticasPage/Estatisticas';
import Postar from './PostFoto/Postar';
import Menu from './MenuConta/Menu';
import Feed from '../../assets/feed.svg';
import EstatisticaImg from '../../assets/estatisticas.svg';
import Adicionar from '../../assets/adicionar.svg';
import MenuMobile from '../Mobile/MenuMobile';
import Logout from '../../assets/sair.svg';

const Home = () => {
  return (
    <main>
      <div className="container-conta">
        <div className="link-nav">
          <Routes>
            <Route index element={<Postagens />} />
            <Route path="estatisticas" element={<Estatisticas />} />
            <Route path="postar" element={<Postar />} />
          </Routes>
          <MenuMobile />
          <ul className="ul-lista-nav">
            <nav>
              <li>
                <NavLink end to="/conta/">
                  <Menu src={Feed} title="Feed icone" />
                </NavLink>
              </li>
              <li>
                <NavLink end to="/conta/estatisticas">
                  <Menu src={EstatisticaImg} title="Icone estatisticas" />
                </NavLink>
              </li>
              <li>
                <NavLink end to="/conta/postar">
                  <Menu src={Adicionar} title="Icone enviar" />
                </NavLink>
              </li>
              <li className="logout">
                <Menu src={Logout} title="Icone sair" />
              </li>
            </nav>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Home;
