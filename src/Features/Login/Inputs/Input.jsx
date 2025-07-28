import React from 'react';
import './Input.css';

const Input = ({ label, id, type }) => {
  return (
    <>
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input className="input-login" type={type} id={id} />
    </>
  );
};

export default Input;
