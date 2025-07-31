import React from 'react';
import './Dogs.css';
import Imgs from './Imgs';
import Modal from '../../ModalPost/Modal';

const Dogs = ({ data }) => {
  const [modal, setModal] = React.useState(false);
  const [id, setId] = React.useState(null);
  function modalAbrir() {
    setModal(true);
  }
  if (data) {
    return (
      <>
        {modal && <Modal id={id} setModal={setModal} />}
        <ul>
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
      </>
    );
  } else {
    return null;
  }
};

export default Dogs;
