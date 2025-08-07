import React from 'react';
import useFetch from './useFetch';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [nome, setNome] = React.useState(null);
  const [token, setToken] = React.useState('');
  const { data, loading, error, request } = useFetch();
  React.useEffect(() => {
    if (token)
      request('/jwt-auth/v1/token/validate', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      });
  }, [request, token]);
  React.useEffect(() => {
    if (window.localStorage.getItem('token')) {
      request('/api/user', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      });
    }
  }, [request, token]);

  React.useEffect(() => {
    setNome(data?.nome);
  }, [data]);

  React.useEffect(() => {
    setToken(window.localStorage.getItem('token'));
  }, [token]);

  function removerToken() {
    setToken(false);
    window.localStorage.removeItem('token');
  }

  return (
    <GlobalContext.Provider value={{ nome, setToken, token, removerToken }}>
      {children}
    </GlobalContext.Provider>
  );
};
