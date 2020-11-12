import React from 'react';

class DescricaoCargo extends React.Component {
  render() {
    return(
      <input
        name='descricaoCargo'
        type='text'
        placeholder='Descrição do cargo'
        maxLength='500'
        required='required'>
      </input>
    )
  }
}

export default DescricaoCargo;
