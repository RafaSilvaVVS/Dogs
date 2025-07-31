import React from 'react';
import './Entrar.css';

const Entrar = ({ texto, fetchLogin, loading }) => {
  return (
    <button
      style={{ opacity: loading ? '0.6' : 1 }}
      onClick={fetchLogin}
      className="btnEntrar"
    >
      {texto}
    </button>
  );
};

export default Entrar;
