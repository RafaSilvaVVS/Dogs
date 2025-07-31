import React from 'react';
import './Login.css';
import Bg from '../../components/BackGrouund/Bg';
import Titulo from '../../components/TituloPirncipal/Titulo';
import Input from './Inputs/Input';
import Entrar from './Btn/Entrar';
import LinkSenha from './LinkSenha/LinkSenha';
import { Link } from 'react-router-dom';

const Login = () => {
  React.useEffect(() => {
    document.title = 'Dogs | Login';
  }, []);
  return (
    <main className="container-login">
      <Bg />
      <div className="login">
        <Titulo texto="Login" />
        <form className="formulario-login" action="POST">
          <Input label="Usuário" id="usuario" type="text" />
          <Input label="Senha" id="senha" type="password" />
          <Entrar texto="Entrar" />
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
