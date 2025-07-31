import React from 'react';
import Titulo from '../../../components/TituloPirncipal/Titulo';

const Postagens = () => {
  React.useEffect(() => {
    document.title = 'Dogs | Conta';
  }, []);
  return (
    <div>
      <Titulo texto="Feed" />
    </div>
  );
};

export default Postagens;
