import React from 'react';
import './Imgs.css';

const Imgs = ({ src, title }) => {
  return <img src={src} alt={`Fotodo de um chachorro ${title}`} />;
};

export default Imgs;
