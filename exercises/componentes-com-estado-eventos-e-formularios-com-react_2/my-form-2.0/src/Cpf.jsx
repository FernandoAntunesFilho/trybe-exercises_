import React from 'react';

class CPF extends React.Component {
  render() {
    return(
      <input
        name='cpf'
        type='number'
        placeholder='CPF'
        maxLength='11'
        required='required'>
      </input>
    )
  }
}

export default CPF;
