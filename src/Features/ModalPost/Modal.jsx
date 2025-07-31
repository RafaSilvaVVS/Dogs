import React from 'react';
import useFetch from '../../hooks/useFetch';
import Titulo from '../../components/TituloPirncipal/Titulo';
import './Modal.css';
import Input from './InputComentario/Input';

const Modal = ({ id, setModal }) => {
  const { data, loading, error, request } = useFetch();
  const modal = React.useRef('');
  React.useEffect(() => {
    request(`/api/photo/${id}`);
  }, [id, request]);

  function fecharModal(e) {
    if (!modal.current.contains(e.target)) setModal(false);
  }

  if (data)
    return (
      <div onClick={fecharModal} className="container-modal">
        <div ref={modal} className="modal-item">
          <div>
            <img src={data.photo.src} alt={data.photo.title} />
          </div>
          <div className="conteudo-foto-modal">
            <div className="header-modal">
              <p className="autor">@{data.photo.author}</p>
              <p className="photo-modal-acessos">{data.photo.acessos}</p>
            </div>
            <Titulo texto={data.photo.title} />
            <div className="infos-dog">
              <p>{data.photo.peso} Kg</p>
              <p>{data.photo.idade} anos</p>
            </div>
            <div className="container-conteudo">
              {data.comments.map((comentario) => (
                <div className="comentarios">
                  <p>
                    {comentario.comment_author}:{' '}
                    <span>{comentario.comment_content}</span>
                  </p>
                </div>
              ))}
              <div className="enviar-comentario">
                <Input />
                <img src="../../../src/assets/enviar.svg" alt="icone enviar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  else {
    return null;
  }
};

export default Modal;
