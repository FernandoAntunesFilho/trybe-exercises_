import React from 'react';
import './Form.css'
import Nome from './Nome';
import Email from './Email';

class Form extends React.Component {
  render() {
    return(
      <div>
        <form>
          <fieldset className='form'>
          <legend>Dados Pessoais</legend>
            <Nome />
            <Email />
            <p>CPF</p>
            <p>Endereço</p>
            <p>Cidade</p>
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