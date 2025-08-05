import React from 'react';
import useFetch from './useFetch';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [nome, setNome] = React.useState(null);
  const [pegarNome, setPegarNome] = React.useState(null);
  const { data, loading, error, request } = useFetch();
  React.useEffect(() => {
    if (window.localStorage.getItem('token'))
      request('/jwt-auth/v1/token/validate', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      });
  }, [request]);
  React.useEffect(() => {
    if (window.localStorage.getItem('token'))
      request('/api/user', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      });

    setPegarNome(true);
  }, [request]);

  React.useEffect(() => {
    if (data) setNome(data.nome);
    if (data?.error) window.localStorage.removeItem('token');
  }, [pegarNome, data]);

  return (
    <GlobalContext.Provider value={nome}>{children}</GlobalContext.Provider>
  );
};
