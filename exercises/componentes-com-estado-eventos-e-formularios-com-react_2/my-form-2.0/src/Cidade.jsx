import React from 'react';
import { connect } from 'react-redux';

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
    const { cidade } = this.props;
    return(
      <input
        name='cidade'
        type='text'
        placeholder='Cidade'
        maxLength='28'
        required='required'
        onBlur={this.limpaCampo}
        defaultValue={ cidade }
      />
    )
  }
}

const mapStateToProps = (state) => ({
  cidade: state.listReducer.cidade,
})

export default connect(mapStateToProps)(Cidade);
