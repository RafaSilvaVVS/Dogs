import React from 'react';
import Titulo from '../../../components/TituloPirncipal/Titulo';

const Postar = () => {
  React.useEffect(() => {
    document.title = 'Dogs | Publicar';
  }, []);
  return <Titulo texto="Postar" />;
};

export default Postar;
