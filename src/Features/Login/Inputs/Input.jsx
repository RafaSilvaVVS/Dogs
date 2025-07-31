import React from 'react';
import './Input.css';

const Input = ({ label, id, type, setValue }) => {
  return (
    <>
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input
        onChange={(e) => setValue(e.target.value)}
        className="input-login"
        type={type}
        id={id}
      />
    </>
  );
};

export default Input;
