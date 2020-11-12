import React from 'react';

class Endereco extends React.Component {
  render() {
    const {valor, handleChange} = this.props;
    return(
      <input
        name='endereco'
        type='text'
        placeholder='Endereço'
        maxLength='200'
        required='required'
        value={valor}
        onChange={handleChange}>
      </input>
    )
  }
}

export default Endereco;
