import React from 'react';
import './Pagina.css';
import { NavLink, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Titulo from '../../components/TituloPirncipal/Titulo';
import Comentar from '../ModalPost/Comentar';

const Pagina = () => {
  const { data, loading, error, request } = useFetch();
  const [comentar, setComentar] = React.useState(false);
  const { id } = useParams();

  React.useEffect(() => {
    if (data) document.title = `Dogs | ${data.photo.title}`;
  }, [id, request, data]);

  React.useEffect(() => {
    request(`/api/photo/${id}`);
    setComentar(false);
  }, [id, request, comentar]);

  console.log(data);

  if (data)
    return (
      <section className="container-foto">
        <img src={data.photo.src} alt={data.photo.title} />
        <div className="dados-foto">
          <div className="header-modal">
            <NavLink to={`/conta/${data.photo.author}`}>
              <p className="autor">@{data.photo.author}</p>
            </NavLink>
            <p className="photo-modal-acessos">{data.photo.acessos}</p>
          </div>
          <Titulo texto={data.photo.title} />
          <div className="infos-dog">
            <p>{data.photo.peso} Kg</p>
            <p>{data.photo.idade} anos</p>
          </div>
          <div className="container-conteudo comentario-foto">
            {data.comments.map((comentario, index) => (
              <div key={index} className="comentarios">
                <p>
                  {comentario.comment_author}:{' '}
                  <span>{comentario.comment_content}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="comentario-input">
            <Comentar id={id} setComentar={setComentar} />
          </div>
        </div>
      </section>
    );
  else {
    return null;
  }
};

export default Pagina;
