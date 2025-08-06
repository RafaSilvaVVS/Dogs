import React from 'react';
import './LinkHeader.css';
import { PropTypes } from 'prop-types';

const LinkHeader = ({ texto }) => {
  console.log(typeof texto);
  return <p className="link-Header">{texto}</p>;
};

LinkHeader.propTypes = {
  texto: PropTypes.number.isRequired,
};

export default LinkHeader;
