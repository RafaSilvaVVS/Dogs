import React from 'react';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import Dogs from '../HomeGetDogs/components/Dogs';
import Titulo from '../../components/TituloPirncipal/Titulo';
import '../HomeGetDogs/components/Dogs.css';
import './Autor.css';
import Loading from '../LoadingIcone/Loading';

const Autor = () => {
  const { data, loading, error, request } = useFetch();

  const { autor } = useParams();

  React.useEffect(() => {
    document.title = `Dogs | ${autor}`;
  }, [data, autor]);

  React.useEffect(() => {
    request(`/api/photo/?_total=9&_page=1&_user=${autor}`);
  }, [autor, request]);
  if (loading) return <Loading loading={loading} />;
  if (data)
    return (
      <section className="main">
        <div className="titulo-conta">
          <Titulo texto={autor} />
        </div>
        <Dogs data={data} />
      </section>
    );
  else return null;
};

export default Autor;
