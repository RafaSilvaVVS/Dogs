import React from 'react';
import URL from '../services/URL';

const useFetch = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [data, setData] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(`${URL}/${url}`, {
        options,
      });
      if (response.ok == false) throw new Error(json.message);
      json = response.json();
    } catch (erro) {
      setError(erro);
      setLoading(false);
    } finally {
      setData(json);
      setLoading(false);
    }
    return { json, response };
  });
  return { data, loading, error, request };
};

export default useFetch;
