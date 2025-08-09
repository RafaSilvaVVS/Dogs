import React from 'react';
import './PerdeuSenha.css';
import Bg from '../../../components/BackGrouund/Bg';
import Input from '../Inputs/Input';
import Btn from '../Btn/Entrar';
import Titulo from '../../../components/TituloPirncipal/Titulo';
import useFetch from '../../../hooks/useFetch';

const PerdeuSenha = () => {
  const [usuario, setUsuario] = React.useState('');
  const { data, loading, error, request } = useFetch();
  function enviarEmail(e) {
    e.preventDefault();
    request('/api/password/lost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: usuario,
        url: 'http://localhost:5173/login/resetar',
      }),
    });
  }
  console.log(usuario);

  console.log(data);

  return (
    <div className="container-login">
      <Bg />
      <form className="formulario-perdeu" action="POST">
        <Titulo texto="Perdeu a senha?" />
        <Input
          label="Email / Usuário"
          id="usuario"
          type="text"
          setValue={setUsuario}
        />
        <Btn texto="Enviar email" fetchLogin={enviarEmail} />
      </form>
    </div>
  );
};

export default PerdeuSenha;
