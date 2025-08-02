import React from 'react';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './Features/Home';
import Login from './Features/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Criar from './Features/Login/CriarConta/Criar';
import HomeConta from './Features/Conta/Home';
import Autor from './Features/AutorPage/Autor';
import Pagina from './Features/PaginaFoto/Pagina';

const App = () => {
  return (
    <BrowserRouter>
      <div className="div-App">
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/criar" element={<Criar />} />
          <Route path="conta/*" element={<HomeConta />} />
          <Route path="perfil/:autor" element={<Autor />} />
          <Route path="foto/:id" element={<Pagina />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
