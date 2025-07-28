import React from 'react';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './Features/Home';
import Login from './Features/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
