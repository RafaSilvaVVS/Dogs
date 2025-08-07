import React, { use } from 'react';
import Titulo from '../../../components/TituloPirncipal/Titulo';
import { GlobalContext } from '../../../../src/hooks/userContext';
import Modal from '../../ModalPost/Modal';
import './Postagens.css';
import ScrollInfinito from '../../ScrollInfinito/ScrollInfinito';

const Postagens = () => {
  const { nome } = React.useContext(GlobalContext);
  const [modal, setModal] = React.useState(false);
  React.useEffect(() => {
    document.title = 'Dogs | Conta';
  }, []);

  if (nome)
    return (
      <>
        <Titulo texto="Feed" />
        <div className="feed-conta">
          {modal && <Modal id={id} setModal={setModal} />}
          <ScrollInfinito user={nome} />
        </div>
      </>
    );
  else {
    return null;
  }
};

export default Postagens;
