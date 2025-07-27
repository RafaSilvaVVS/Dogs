import React from 'react';
import URL from '../services/URL';

const useFetch = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [data, setData] = React.useState(null);

  const request = React.useCallback(async (enpoint, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(`${URL}${enpoint}`, options);
      json = await response.json();
      if (response.ok == false) throw new Error(json.message);
    } catch (erro) {
      setError(erro);
      setLoading(false);
    } finally {
      setData(json);
      setLoading(false);
    }
    return { json, response };
  }, []);
  return { data, loading, error, request };
};

export default useFetch;
