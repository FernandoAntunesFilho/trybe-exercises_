import React from 'react';
import './Form.css'
import Nome from './Nome';
import Email from './Email';
import Cpf from './Cpf';
import Endereco from './Endereco';
import Cidade from './Cidade';

class Form extends React.Component {
  render() {
    return(
      <div>
        <form>
          <fieldset className='form'>
          <legend>Dados Pessoais</legend>
            <Nome />
            <Email />
            <Cpf />
            <Endereco />
            <Cidade />
            <p>Estado</p>
            <p>Tipo</p>
          </fieldset>

          <fieldset>
          <legend>Dados do último emprego</legend>
            <p>Resumo do currículo</p>
            <p>Cargo</p>
            <p>Descrição do cargo</p>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Form;