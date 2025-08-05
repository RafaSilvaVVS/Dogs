import React from 'react';
import './Main.css';
import useFetch from '../../../hooks/useFetch';
import Dogs from '../components/Dogs';
import Loading from '../../LoadingIcone/Loading';

const Main = () => {
  const { data, loading, error, request } = useFetch();
  const [total, setTotal] = React.useState(6);
  const listaFoto = React.useRef();
  const [mensagem, setMensagem] = React.useState('');
  const [mutacao, setMutacao] = React.useState(false);
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          (mutacao || !mutacao) &&
          entries[0].isIntersecting &&
          !loading &&
          total <= data?.length
        ) {
          setTotal((ant) => ant + 6);
        }
        if (data && total >= data.length) {
          setMensagem('Não a mais publicações');
        } else {
          setMensagem('');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      },
    );

    if (listaFoto.current) {
      observer.observe(listaFoto.current);
    }

    return () => {
      if (listaFoto.current) {
        observer.unobserve(listaFoto.current);
      }
    };
  }, [loading, total, data, mutacao]);

  function ativarMutacao() {
    if (
      mutacao == false &&
      listaFoto.current &&
      listaFoto.current.getBoundingClientRect().top <= 400
    ) {
      setMutacao(true);
    }

    return () => {
      window.removeEventListener('scroll', ativarMutacao);
    };
  }

  if (mutacao == false) window.addEventListener('scroll', ativarMutacao);

  React.useEffect(() => {
    request(`/api/photo/?_total=${total}&_page=1&_user=0`);
  }, [total, request]);

  if (loading) return <Loading loading={loading} />;
  if (data && !loading)
    return (
      <main>
        <div className="main">
          {data && <Dogs data={data} />}
          {data && mensagem && (
            <p style={{ textAlign: 'center' }}>{mensagem}</p>
          )}
          <div ref={listaFoto} style={{ height: '30px' }}></div>
        </div>
      </main>
    );
  else {
    return null;
  }
};

export default Main;
