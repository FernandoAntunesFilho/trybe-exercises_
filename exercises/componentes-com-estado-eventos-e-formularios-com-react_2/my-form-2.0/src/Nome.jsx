import React from 'react';

class Nome extends React.Component {
  render() {
    const {valor, handleChange} = this.props;
    return(
      <input
        style={{ textTransform: 'uppercase'}}
        name='nome'
        type='text'
        placeholder='Nome'
        maxLength='40'
        required='required'
        value={valor}
        onChange={handleChange}>
      </input>
    )
  }
}

export default Nome;

// como deixar o texto automaticamente em CAIXA ALTA: style={{ textTransform: 'uppercase'}}
// enconteado em consulta ao stackoverflow