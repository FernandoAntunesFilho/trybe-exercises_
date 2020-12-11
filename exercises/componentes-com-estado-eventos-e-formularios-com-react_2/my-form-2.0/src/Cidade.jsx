import React from 'react';
import { connect } from 'react-redux';
import { addCidade } from '../src/actions/addCidade';

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
    const { cidade, addCidade } = this.props;
    return(
      <input
        name='cidade'
        type='text'
        placeholder='Cidade'
        maxLength='28'
        required='required'
        onBlur={this.limpaCampo}
        defaultValue={ cidade }
        onChange={(event) => addCidade(event.target.value)}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  cidade: state.listReducer.cidade,
})

const mapDispatchToProps = { addCidade };

export default connect(mapStateToProps, mapDispatchToProps)(Cidade);
