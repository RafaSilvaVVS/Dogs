import React from 'react';
import DogIcone from '../../assets/dogs-footer.svg';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="container">
      <div className="container-item">
        <img src={DogIcone} alt="Icone de um cachorro" />
        <p>Dogs. Alguns direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
