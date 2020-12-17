import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.css'

class Login extends React.Component {
  
  handleClick(path) {
    this.props.history.push(path);
  }

  render() {
    return(
      <div className='login'>
        <div className="container-login">
          <form className="form">
            <input type="email" placeholder="Digite seu email" />
            <input type="current-password" placeholder="Digite sua senha" />
          </form>
          <div className="container-buttons">
            <button type="button" onClick={ () => this.handleClick("/clientes") }>Entrar</button>
            <button type="button" onClick={ () => this.handleClick("/") }>Voltar</button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);
