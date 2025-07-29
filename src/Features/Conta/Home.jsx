import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './Home.css';
import Postagens from './PostsPage/Postagens';
import Estatisticas from './EstatisticasPage/Estatisticas';
import Postar from './PostFoto/Postar';

const Home = () => {
  return (
    <main>
      <div className="container-conta">
        <NavLink to="/conta">Home</NavLink>
        <NavLink end to="/conta/estatisticas">
          Estatisticas
        </NavLink>
        <NavLink end to="/conta/postar">
          Postar
        </NavLink>
        <div>
          <Routes>
            <Route index element={<Postagens />} />
            <Route path="estatisticas" element={<Estatisticas />} />
            <Route path="postar" element={<Postar />} />
          </Routes>
        </div>
      </div>
    </main>
  );
};

export default Home;
