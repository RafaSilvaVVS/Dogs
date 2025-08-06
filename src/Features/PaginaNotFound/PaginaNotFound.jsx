import React from 'react';
import Titulo from '../../components/TituloPirncipal/Titulo';
import './PaginaNotFound.css';

const PaginaNotFound = () => {
  return (
    <div className="pagina-not-found">
      <div>
        <Titulo texto="Erro: 404" />
        <p>Página não encontrada</p>
      </div>
    </div>
  );
};

export default PaginaNotFound;
