import React from 'react';

class CPF extends React.Component {
  render() {
    const {valor, handleChange} = this.props;
    return(
      <input
        name='cpf'
        type='number'
        placeholder='CPF'
        maxLength='11'
        required='required'
        value={valor}
        onChange={handleChange}>
      </input>
    )
  }
}

export default CPF;
