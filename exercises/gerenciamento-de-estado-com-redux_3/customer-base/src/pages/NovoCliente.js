import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCustomer } from '../actions/addCustomer';
import LoginFail from '../pages/LoginFail'

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

    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('email').value = '';
  }

  render() {
    const { email, password } = this.props;
    return(
      email === 'fernando.antunes1@gmail.com' && password === 'ferfilho1983' ?
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
        </div> :
      <LoginFail />
    )
  }
}

const mapStateToProps = (state) => ({
  email: state.userReducer.email,
  password: state.userReducer.password,
})

const mapDispatchToProps = { addCustomer }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NovoCliente));
