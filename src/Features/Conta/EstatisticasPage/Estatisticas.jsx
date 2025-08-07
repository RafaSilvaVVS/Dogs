import React, { Suspense } from 'react';
import Titulo from '../../../components/TituloPirncipal/Titulo';
import GraficoPie from './GraficoVictory/GraficoPie';
import Acessos from './Acessos/Acessos';
import './Estatisticas.css';
import Loading from '../../LoadingIcone/Loading';

const Estatisticas = () => {
  const GraficoLazy = React.lazy(() => import('./GraficoVictory/GraficoPie'));

  React.useEffect(() => {
    document.title = 'Dogs | Estátisticas';
  }, []);
  return (
    <>
      <Titulo texto="Estatisticas" />
      <div className="container-grafico">
        <Acessos />
        <Suspense fallback={<Loading />}>
          <GraficoLazy />
        </Suspense>
      </div>
    </>
  );
};

export default Estatisticas;
