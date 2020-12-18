import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeCustomer } from '../actions/removeCustomer';
import { removeUser } from '../actions/removeUser';
import { sortCustomer } from '../actions/sortCustomer';
import LoginFail from '../pages/LoginFail'


class Clientes extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reder: false,
    }
  }

  handleClick(path, buttonFunction) {
    const { removeUser } = this.props;
    if (buttonFunction === 'Sair') {
      removeUser();
    }
    this.props.history.push(path);
  }

  compare = (a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
  
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    this.setState({
      render: true,
    })
    return comparison;
  }

  render() {
    const { email, password, clientes, removeCustomer, sortCustomer } = this.props;
    return(
      email === 'fernando.antunes1@gmail.com' && password === 'ferfilho1983' ?
        <div className='clientes'>
          <h1>CLIENTES</h1>
          { clientes.length === 0 ?
            <p>Nenhum cliente cadastrado</p> :
            clientes.map((cliente, index) => {
              return <li key={ cliente.email }>
                {`${cliente.name} - ${cliente.age} anos - ${cliente.email}`}
                <button type='button' onClick={ () => removeCustomer(index) }>X</button>
              </li>
              })
          }
          <button
            type='button'
            onClick={ () => this.handleClick('/novocliente', 'Novo Cliente') }
          >
            Novo cliente
          </button>
          <button
            type='button'
            onClick={ () => this.handleClick('/', 'Sair') }
          >
            Sair
          </button>
          <button
            type='button'
            onClick={ () => sortCustomer(clientes.sort(this.compare))}
          >
            Ordenar por nome
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

const mapDispatchToProps = { removeCustomer, sortCustomer, removeUser };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Clientes));
