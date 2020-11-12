import React from 'react';

class Endereco extends React.Component {
  render() {
    return(
      <input
        name='endereco'
        type='text'
        placeholder='Endereço'
        maxLength='200'
        required='required'>
      </input>
    )
  }
}

export default Endereco;
