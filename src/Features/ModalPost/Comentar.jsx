import React from 'react';
import Input from './InputComentario/Input';
import useFetch from '../../hooks/useFetch';
import './Comentar.css';

const Comentar = ({ id, setComentar }) => {
  const { data, loading, error, request } = useFetch();
  const [comentario, setComentario] = React.useState('');
  function comentar(e) {
    e.preventDefault();
    console.log(id);
    request(`/api/comment/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ comment: comentario }),
    });
    setComentar(true);
  }

  return (
    <form action="POST">
      <div className="enviar-comentario">
        <Input setValue={setComentario} />
        <button onClick={(e) => comentar(e)} className="btn-comentario">
          <img src="../../../src/assets/enviar.svg" alt="icone enviar" />
        </button>
      </div>
    </form>
  );
};

export default Comentar;
