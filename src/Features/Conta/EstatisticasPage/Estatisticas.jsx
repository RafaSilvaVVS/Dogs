import React from 'react';
import Titulo from '../../../components/TituloPirncipal/Titulo';
import GraficoPie from './GraficoVictory/GraficoPie';
import Acessos from './Acessos/Acessos';
import './Estatisticas.css';

const Estatisticas = () => {
  React.useEffect(() => {
    document.title = 'Dogs | Estátisticas';
  }, []);
  return (
    <>
      <Titulo texto="Estatisticas" />
      <div className="container-grafico">
        <Acessos />
        <GraficoPie />
      </div>
    </>
  );
};

export default Estatisticas;
