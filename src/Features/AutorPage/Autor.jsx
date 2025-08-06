import React from 'react';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import Titulo from '../../components/TituloPirncipal/Titulo';
import '../HomeGetDogs/components/Dogs.css';
import './Autor.css';
import Loading from '../LoadingIcone/Loading';
import ScrollInfinito from '../ScrollInfinito/ScrollInfinito';

const Autor = () => {
  const { autor } = useParams();
  React.useEffect(() => {
    document.title = `Dogs | ${autor}`;
  }, [autor]);

  if (autor)
    return (
      <section className="main">
        <div className="titulo-conta">
          <Titulo texto={autor} />
        </div>
        <ScrollInfinito user={autor} />
      </section>
    );
  else return null;
};

export default Autor;
