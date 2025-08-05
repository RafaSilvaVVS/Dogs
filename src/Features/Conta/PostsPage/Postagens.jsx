import React from 'react';
import Titulo from '../../../components/TituloPirncipal/Titulo';
import { GlobalContext } from '../../../../src/hooks/userContext';
import useFetch from '../../../hooks/useFetch';
import Modal from '../../ModalPost/Modal';
import Imgs from '../../HomeGetDogs/components/Imgs';
import './Postagens.css';

const Postagens = () => {
  const user = React.useContext(GlobalContext);
  const { data, loading, error, request } = useFetch();
  const [id, setId] = React.useState(null);
  const [modal, setModal] = React.useState(false);
  React.useEffect(() => {
    document.title = 'Dogs | Conta';
  }, []);

  function modalAbrir() {
    setModal(true);
  }

  React.useEffect(() => {
    request(`/api/photo/?_total=9&_page=1&_user=${user}`);
  }, [user, request]);

  if (data)
    return (
      <>
        <Titulo texto="Feed" />
        <div className="feed-conta">
          {modal && <Modal id={id} setModal={setModal} />}
          <ul className="ul-lista-posts-conta">
            {data.map((dados) => (
              <li
                onClick={() => setId(dados.id)}
                key={dados.id}
                className="liPost"
              >
                <div onClick={modalAbrir}>
                  <Imgs src={dados.src} title={dados.title} />
                  <span className="acessos">{dados.acessos}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  else {
    return null;
  }
};

export default Postagens;
