import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginFail from '../pages/LoginFail'


class Clientes extends React.Component {

  handleClick(path) {
    this.props.history.push(path);
  }

  render() {
    const { email, password } = this.props;
    return(
      email === 'fernando.antunes1@gmail.com' && password === 'ferfilho1983' ?
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
      </div> :
      <LoginFail />
    )
  }
}

const mapStateToProps = (state) => ({
  email: state.userReducer.email,
  password: state.userReducer.password,
})

export default connect(mapStateToProps)(withRouter(Clientes));
