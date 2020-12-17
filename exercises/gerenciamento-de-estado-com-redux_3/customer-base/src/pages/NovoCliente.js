import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCustomer } from '../actions/addCustomer';

class NovoCliente extends React.Component {

  handleClick(path) {
    this.props.history.push(path);
  }

  dispatchData() {
    const { addCustomer } = this.props;
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    addCustomer(name, age, email);
  }

  render() {
    return(
      <div className='novo-cliente'>
        <h1>Cadastrar novo cliente</h1>
        <form>
          <input id='name' type='text' placeholder='Nome' />
          <input id='age' type='number' placeholder='Idade' />
          <input id='email' type='email' placeholder='e-mail' />
        </form>
        <button
          type='button'
          onClick={ () => this.dispatchData()}
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

const mapDispatchToProps = { addCustomer }

export default connect(null, mapDispatchToProps)(withRouter(NovoCliente));
