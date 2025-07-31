import React from 'react';
import './Criar.css';
import Bg from '../../../components/BackGrouund/Bg';
import Input from '../Inputs/Input';
import Titulo from '../../../components/TituloPirncipal/Titulo';
import Button from '../Btn/Entrar';
import useFetch from '../../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
const Criar = () => {
  const navigate = useNavigate();
  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [errorCriar, setErrorCriar] = React.useState('');
  const [login, setLogin] = React.useState(false);
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    document.title = 'Dogs | Criar';
  }, []);

  React.useEffect(() => {
    if (data && data.code) {
      if (data && data.data.status === 406) {
        setErrorCriar('Dados Incompeltos');
      } else if (data && data.data.status === 403) {
        setErrorCriar('Usuário já cadastrado');
      }
    }

    if (data && data.token) {
      window.localStorage.setItem('token', data.token);
      navigate('/conta/');
    }

    if (typeof data === 'number') {
      setLogin(true);
    }
  }, [data, navigate]);

  React.useEffect(() => {
    if (login) {
      request('/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      setLogin(false);
    }
  }, [data, login, password, request, username]);

  function userCriar(e) {
    e.preventDefault();
    request('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
      }),
    });
  }
  return (
    <main className="container-criar">
      <Bg />
      <form className="formulario-criar" action="POST">
        <Titulo texto="Criar Conta" />
        <Input setValue={setUserName} label="Usuáro" id="Usuario" type="text" />
        <Input setValue={setEmail} label="Email" id="email" type="email" />
        <Input
          setValue={setPassword}
          label="Senha"
          id="senha"
          type="password"
        />
        {errorCriar && <p className="error-criar">{errorCriar}</p>}
        <Button fetchLogin={userCriar} texto="Cadastrar" />
      </form>
    </main>
  );
};

export default Criar;
