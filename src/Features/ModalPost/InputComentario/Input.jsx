import React from 'react';
import './Input.css';

const Input = ({ setValue }) => {
  return (
    <>
      <input
        onChange={(e) => setValue(e.target.value)}
        className="input-comentario"
        type="comentario"
        id="comentario"
        name="comentario"
      />
    </>
  );
};

export default Input;
