import React from 'react';
import useFetch from '../../hooks/useFetch';
import Titulo from '../../components/TituloPirncipal/Titulo';
import './Modal.css';
import Input from './InputComentario/Input';
import { NavLink } from 'react-router-dom';
import Comentar from './Comentar';

const Modal = ({ id, setModal }) => {
  const { data, loading, error, request } = useFetch();
  const [comentario, setComentar] = React.useState(false);

  const modal = React.useRef('');
  React.useEffect(() => {
    request(`/api/photo/${id}`);
    setComentar(false);
  }, [id, request, comentario]);

  function fecharModal(e) {
    if (modal) {
      if (!modal.current.contains(e.target)) {
        setModal(false);
      }
    }
  }

  if (data && data.photo)
    return (
      <div onClick={fecharModal} className="container-modal">
        <div ref={modal} className="modal-item">
          <div>
            <img src={data.photo.src} alt={data.photo.title} />
          </div>
          <div className="conteudo-foto-modal">
            <div className="header-modal">
              <NavLink to={`/perfil/${data.photo.author}`}>
                <p className="autor">@{data.photo.author}</p>
              </NavLink>
              <p className="photo-modal-acessos">{data.photo.acessos}</p>
            </div>
            <NavLink to={`/foto/${data.photo.id}`}>
              <Titulo texto={data.photo.title} />
            </NavLink>
            <div className="infos-dog">
              <p>{data.photo.peso} Kg</p>
              <p>{data.photo.idade} anos</p>
            </div>
            <div className="container-conteudo">
              {data.comments.map((comentario, index) => (
                <div key={index} className="comentarios">
                  <p>
                    {comentario.comment_author}:{' '}
                    <span>{comentario.comment_content}</span>
                  </p>
                </div>
              ))}
            </div>
            {window.localStorage.getItem('token') && (
              <Comentar id={id} setComentar={setComentar} />
            )}
          </div>
        </div>
      </div>
    );
  else {
    return null;
  }
};

export default Modal;
