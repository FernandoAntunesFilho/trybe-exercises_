import React from 'react';

class DescricaoCargo extends React.Component {
  render() {
    const {valor, handleChange} = this.props;
    return(
      <input
        name='descricaoCargo'
        type='text'
        placeholder='Descrição do cargo'
        maxLength='500'
        required='required'
        value={valor}
        onChange={handleChange}>
      </input>
    )
  }
}

export default DescricaoCargo;
