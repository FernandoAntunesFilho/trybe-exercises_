import React from 'react';

class Cidade extends React.Component {
  limpaCampo = (event) => {
    const texto = event.target.value;
    for (let index = 0; index < 10; index += 1) {
      if (parseInt(texto.charAt(0)) === index) {
        event.target.value = ''
      };
    }
  }

  render() {
    const {valor, handleChange} = this.props;
    return(
      <input
        name='cidade'
        type='text'
        placeholder='Cidade'
        maxLength='28'
        required='required'
        onBlur={this.limpaCampo}
        value={valor}
        onChange={handleChange}>
      </input>
    )
  }
}

export default Cidade;
