import React from 'react';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './Features/Home';

const App = () => {
  return (
    <div className="div-App">
      <div>
        <Header />
      </div>
      <Home />
      <Footer />
    </div>
  );
};

export default App;
