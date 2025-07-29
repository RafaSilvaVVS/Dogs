import React from 'react';
import './Criar.css';
import Bg from '../../../components/BackGrouund/Bg';
import Input from '../Inputs/Input';
import Titulo from '../../../components/TituloPirncipal/Titulo';
import Button from '../Btn/Entrar';

const Criar = () => {
  return (
    <main className="container-criar">
      <Bg />
      <form className="formulario-criar" action="POST">
        <Titulo texto="Criar Conta" />
        <Input label="Usuáro" id="Usuario" type="text" />
        <Input label="Email" id="email" type="email" />
        <Input label="Senha" id="senha" type="password" />
        <Button texto="Cadastrar" />
      </form>
    </main>
  );
};

export default Criar;
