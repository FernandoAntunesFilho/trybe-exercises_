import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginFail from '../pages/LoginFail'


class Clientes extends React.Component {

  handleClick(path) {
    this.props.history.push(path);
  }

  render() {
    const { email, password, clientes } = this.props;
    return(
      email === 'fernando.antunes1@gmail.com' && password === 'ferfilho1983' ?
      <div className='clientes'>
        <h1>CLIENTES</h1>
        { clientes.length === 0 ?
          <p>Nenhum cliente cadastrado</p> :
          clientes.map((cliente) => {
            return <li key={ cliente.email }>
              {`${cliente.name} - ${cliente.age} anos - ${cliente.email}`}
            </li>})
        }
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
  clientes: state.customerReducer
})

export default connect(mapStateToProps)(withRouter(Clientes));
