import React from 'react';

class Form extends React.Component {
  render() {
    return(
      <div>
        <form>
          <fieldset>
          <legend>Dados Pessoais</legend>
            <p>Nome</p>
            <p>E-mail</p>
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