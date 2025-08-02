import React from 'react';
import Titulo from '../../../components/TituloPirncipal/Titulo';
import Formulario from './FormularioPost/Formulario';

const Postar = () => {
  React.useEffect(() => {
    document.title = 'Dogs | Publicar';
  }, []);
  return (
    <>
      <Titulo texto="Postar" />
      <Formulario />
    </>
  );
};

export default Postar;
