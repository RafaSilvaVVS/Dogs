import React from 'react';
import './Formulario.css';
import Enviar from '../../../Login/Btn/Entrar';
import useFetch from '../../../../hooks/useFetch';
const Formulario = () => {
  const [nome, setNome] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [preview, setPreview] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [errorMeessage, setErrorMessage] = React.useState('');
  const [img, setImg] = React.useState('');
  const { data, loading, error, request } = useFetch();
  function fetchPost(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('img', img);
    formData.append('nome', nome);
    formData.append('peso', peso);
    formData.append('idade', idade);
    if (data?.code) {
      setErrorMessage('Dados Incompletos');
    } else {
      setErrorMessage('');
    }
    request('/api/photo', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
      body: formData,
    });
  }

  React.useEffect(() => {
    console.log('olá');
    if (img) {
      setPreview(URL.createObjectURL(img));
    }
  }, [img]);

  return (
    <>
      <div className="formulario-publicar">
        <form onSubmit={fetchPost} method="post">
          <label htmlFor="nome">Nome</label>
          <input
            onChange={(e) => setNome(e.target.value)}
            type="text"
            name="nome"
            id="nome"
          />
          <label htmlFor="idade">Idade</label>
          <input
            onChange={(e) => setIdade(e.target.value)}
            type="text"
            name="idade"
            id="idade"
          />
          <label htmlFor="peso">Peso</label>
          <input
            onChange={(e) => setPeso(e.target.value)}
            type="text"
            name="peso"
            id="peso"
          />
          <label htmlFor="foto">Foto</label>
          <input
            onChange={(e) => setImg(e.target.files[0])}
            type="file"
            name="foto"
            id="foto"
          />
          {errorMeessage && <p style={{ color: 'red' }}>{errorMeessage}</p>}
          <Enviar texto="Publicar" fetchLogin={fetchPost} />
        </form>
        <div className="preview">
          {preview && <img src={preview} alt="imagem" />}
        </div>
      </div>
    </>
  );
};

export default Formulario;
