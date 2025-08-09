import React from 'react';
import '../PerdeuSenha.css';
import Bg from '../../../../components/BackGrouund/Bg';
import Input from '../../Inputs/Input';
import Btn from '../../Btn/Entrar';
import Titulo from '../../../../components/TituloPirncipal/Titulo';
import useFetch from '../../../../hooks/useFetch';

const Resetar = () => {
  const [senha, setSenha] = React.useState('');
  const { data, loading, error, request } = useFetch();
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const params = new URLSearchParams(document.location.search);
  const loginParams = params.get('login');
  const keyParams = params.get('key');

  React.useEffect(() => {
    setLogin(loginParams);
    setKey(keyParams);
  }, [login, key]);
  function resetarSenha(e) {
    e.preventDefault();
    request('/api/password/reset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: login,
        password: senha,
        key: key,
      }),
    });
  }

  return (
    <div className="container-login">
      <Bg />
      <form className="formulario-perdeu" action="POST">
        <Titulo texto="Resetar a senha" />
        <Input
          label="Nova Senha"
          id="usuario"
          type="text"
          setValue={setSenha}
        />
        <Btn texto="Enviar email" fetchLogin={resetarSenha} />
      </form>
    </div>
  );
};

export default Resetar;
