import React from 'react';
import './Main.css';
import useFetch from '../../../hooks/useFetch';
import Dogs from '../components/Dogs';

const Main = () => {
  const { data, loading, error, request } = useFetch();
  React.useEffect(() => {
    request('/api/photo');
  }, [request]);

  return (
    <main>
      <div className="main">{data && <Dogs data={data} />}</div>
    </main>
  );
};

export default Main;
