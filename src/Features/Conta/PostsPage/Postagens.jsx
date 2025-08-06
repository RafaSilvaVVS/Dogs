import React from 'react';
import Titulo from '../../../components/TituloPirncipal/Titulo';
import { GlobalContext } from '../../../../src/hooks/userContext';
import useFetch from '../../../hooks/useFetch';
import Modal from '../../ModalPost/Modal';
import Imgs from '../../HomeGetDogs/components/Imgs';
import './Postagens.css';
import ScrollInfinito from '../../ScrollInfinito/ScrollInfinito';

const Postagens = () => {
  const user = React.useContext(GlobalContext);
  const [id, setId] = React.useState(null);
  const [modal, setModal] = React.useState(false);
  React.useEffect(() => {
    document.title = 'Dogs | Conta';
  }, []);

  if (user)
    return (
      <>
        <Titulo texto="Feed" />
        <div className="feed-conta">
          {modal && <Modal id={id} setModal={setModal} />}
          <ScrollInfinito user={user} />
        </div>
      </>
    );
  else {
    return null;
  }
};

export default Postagens;
