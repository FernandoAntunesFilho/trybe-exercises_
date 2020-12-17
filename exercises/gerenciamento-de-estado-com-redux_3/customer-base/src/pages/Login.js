import React from 'react';
import './Login.css'

class Login extends React.Component {
  render() {
    return(
      <div className='login'>
        <div className="container-login">
          <form className="form">
            <input type="text" placeholder="Digite seu usuário" />
            <input type="password" placeholder="Digite sua senha" />
          </form>
          <div className="container-buttons">
            <button type="button">Entrar</button>
            <button type="button">Voltar</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
