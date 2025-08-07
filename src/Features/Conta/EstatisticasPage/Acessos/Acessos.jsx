import React from 'react';
import './Acessos.css';
import useFetch from '../../../../hooks/useFetch';

const Acessos = () => {
  const { data, loading, error, request } = useFetch();
  const [somarAcessos, setSomarAcessos] = React.useState('');
  React.useEffect(() => {
    request('/api/stats', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
  }, [request]);

  React.useEffect(() => {
    const acessosTotal = data?.reduce((acc, atual) => {
      return acc + atual.acessos;
    }, 0);
    setSomarAcessos(acessosTotal);
  }, [somarAcessos, data]);

  if (data)
    return <div className="acessos-container">Acessos {somarAcessos}</div>;
};

export default Acessos;
