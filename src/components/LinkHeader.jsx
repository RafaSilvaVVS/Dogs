import React from 'react';
import './LinkHeader.css';

const LinkHeader = ({ texto }) => {
  console.log(typeof texto);
  return <p className="link-Header">{texto}</p>;
};

export default LinkHeader;
