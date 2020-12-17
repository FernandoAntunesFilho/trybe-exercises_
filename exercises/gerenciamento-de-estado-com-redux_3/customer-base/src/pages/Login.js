import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUserEmail } from '../actions/addUserEmail';
import { addUserPassword } from '../actions/addUserPassword';
import './Login.css'

class Login extends React.Component {
  
  handleClick(path) {
    this.props.history.push(path);
  }

  render() {
    const { addUserEmail, addUserPassword } = this.props;
    return(
      <div className='login'>
        <div className="container-login">
          <form className="form">
            <input
              type="email"
              placeholder="Digite seu email"
              onChange={ (event) => addUserEmail(event.target.value) }
            />
            <input
              type="password"
              placeholder="Digite sua senha"
              onChange={ (event) => addUserPassword(event.target.value) }
            />
          </form>
          <div className="container-buttons">
            <button
              type="button"
              onClick={ () => this.handleClick("/clientes") }
            >
              Entrar
            </button>
            <button
              type="button"
              onClick={ () => this.handleClick("/") }
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = { addUserEmail, addUserPassword };

export default connect(null, mapDispatchToProps)(withRouter(Login));
