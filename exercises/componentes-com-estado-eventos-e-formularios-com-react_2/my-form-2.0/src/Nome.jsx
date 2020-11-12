import React from 'react';

class Nome extends React.Component {
  toUpperCase = (event) => {

  }

  render() {
    return(
      <input
        style={{ textTransform: 'uppercase'}}
        name='nome'
        type='text'
        placeholder='Nome'
        maxLength='40'
        required='required'>
      </input>
    )
  }
}

export default Nome;

// como deixar o texto automaticamente em CAIXA ALTA: style={{ textTransform: 'uppercase'}}
// enconteado em consulta ao stackoverflow