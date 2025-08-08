import React from 'react';
import './Deletar.css';
import useFetch from '../../../hooks/useFetch';
import { GlobalContext } from '../../../hooks/userContext';
import { useNavigate } from 'react-router-dom';

const Deletar = ({ id }) => {
  const { data, loading, error, request } = useFetch();
  const navigate = useNavigate();
  function deletarPhoto() {
    request(`/api/photo/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
    window.location.reload();
  }

  console.log(data);

  return <button onClick={deletarPhoto}>DELETAR</button>;
};

export default Deletar;
