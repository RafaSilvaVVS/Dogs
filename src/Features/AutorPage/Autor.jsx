import React from 'react';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import Dogs from '../HomeGetDogs/components/Dogs';
import '../HomeGetDogs/components/Dogs.css';
import Titulo from '../../components/TituloPirncipal/Titulo';
import './Autor.css';

const Autor = () => {
  const { data, loading, error, request } = useFetch();

  const { autor } = useParams();

  React.useEffect(() => {
    request(`/api/photo/?_total=9&_page=1&_user=cat`);
  }, [autor, request]);

  return (
    <section className="main">
      <div className="titulo-conta">
        <Titulo texto={autor} />
      </div>
      <Dogs data={data} />
    </section>
  );
};

export default Autor;
