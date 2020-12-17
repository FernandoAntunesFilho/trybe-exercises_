import React from 'react';
import { withRouter } from 'react-router-dom';

class NovoCliente extends React.Component {

  handleClick(path) {
    this.props.history.push(path);
  }

  render() {
    return(
      <div className='novo-cliente'>
        <h1>Cadastrar novo cliente</h1>
        <form>
          <input type='text' placeholder='Nome' />
          <input type='number' placeholder='Idade' />
          <input type='email' placeholder='e-mail' />
        </form>
        <button
          type='button'
          onClick={ () => alert('Cliente cadastrado com sucesso')}
        >
          Cadastrar
        </button>
        <button
          type='button'
          onClick={ () => this.handleClick('/clientes') }
        >
          Voltar
        </button>
      </div>
    )
  }
}

export default withRouter(NovoCliente);
