import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginFail extends React.Component {

  handleClick(path) {
    this.props.history.push(path);
  }

  render() {
    return(
      <div className='login-fail'>
      <h1>Login não efetuado</h1>
        <button
          type='button'
          onClick={ () => this.handleClick('/login') }
        >
          Voltar
        </button>
      </div>
    )
  }
}

export default withRouter(LoginFail);
