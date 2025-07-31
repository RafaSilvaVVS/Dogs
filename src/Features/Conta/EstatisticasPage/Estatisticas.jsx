import React from 'react';
import Titulo from '../../../components/TituloPirncipal/Titulo';

const Estatisticas = () => {
  React.useEffect(() => {
    document.title = 'Dogs | Estátisticas';
  }, []);
  return (
    <div>
      <Titulo texto="Estatisticas" />
    </div>
  );
};

export default Estatisticas;
