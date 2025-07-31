import React from 'react';
import './Login.css';
import Bg from '../../components/BackGrouund/Bg';
import Titulo from '../../components/TituloPirncipal/Titulo';
import Input from './Inputs/Input';
import Entrar from './Btn/Entrar';
import LinkSenha from './LinkSenha/LinkSenha';
import { Link, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const Login = () => {
  const { data, loading, error, request } = useFetch();
  const [erroMessage, setErroMessage] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  React.useEffect(() => {
    document.title = 'Dogs | Login';
  }, []);

  const navigate = useNavigate();

  function fetchLogin(e) {
    e.preventDefault();
    request(`/jwt-auth/v1/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username, password: password }),
    });
  }

  React.useEffect(() => {
    if (error) {
      setErroMessage(' A senha fornecida é uma senha de aplicação inválida.');
    }
  }, [error]);
  React.useEffect(() => {
    if (data && data.token) {
      console.log(data);
      window.localStorage.setItem('token', data.token);
      navigate('/conta/');
    }
  }, [data, navigate]);

  return (
    <main className="container-login">
      <Bg />
      <div className="login">
        <Titulo texto="Login" />
        <form className="formulario-login" action="POST">
          <Input
            setValue={setUsername}
            label="Usuário"
            id="usuario"
            type="text"
          />
          <Input
            setValue={setPassword}
            label="Senha"
            id="senha"
            type="password"
          />
          {error && <p className="error-message">{erroMessage}</p>}
          <Entrar
            texto={loading ? 'Carregando' : 'Entrar'}
            fetchLogin={fetchLogin}
            loading={loading}
          />
        </form>
        <LinkSenha />
        <div className="cadastro">
          <h2>Cadastre-se</h2>
          <p>Ainda não possui conta? Cadastre-se no site.</p>
          <Link to="criar">
            <Entrar texto="Cadastro" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
