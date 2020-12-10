import React from 'react';
import { connect } from 'react-redux';

class Nome extends React.Component {
  render() {
    const {nome, addData} = this.props;

    return(
      <input
        id='nome'
        style={{ textTransform: 'uppercase'}}
        name='nome'
        type='text'
        placeholder='Nome'
        maxLength='40'
        required='required'
        defaultValue={nome}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  nome: state.listReducer.nome,
})

export default connect(mapStateToProps)(Nome);

// como deixar o texto automaticamente em CAIXA ALTA: style={{ textTransform: 'uppercase'}}
// enconteado em consulta ao stackoverflow