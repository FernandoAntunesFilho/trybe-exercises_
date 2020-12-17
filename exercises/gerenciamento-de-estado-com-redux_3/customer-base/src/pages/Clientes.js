import React from 'react';
import { withRouter } from 'react-router-dom';

class Clientes extends React.Component {

  handleClick(path) {
    this.props.history.push(path);
  }

  render() {
    return(
      <div className='clientes'>
        <h1>CLIENTES</h1>
        <p>Nenhum cliente cadastrado</p>
        <button
          type='button'
          onClick={ () => this.handleClick('/novocliente') }
        >
          Novo cliente
        </button>
        <button
          type='button'
          onClick={ () => this.handleClick('/') }
        >
          Sair
        </button>
      </div>
    )
  }
}

export default withRouter(Clientes);
