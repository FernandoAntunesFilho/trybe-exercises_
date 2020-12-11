import React from 'react';
import { connect } from 'react-redux';
import { addData } from '../src/actions';

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
        onChange={(event)=> addData('nome', event.target.value)}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  nome: state.listReducer.nome,
})

// const mapDispatchToProps = (dispatch) => ({  
//   addData: (field, value) => dispatch(addData(field, value))
// });

const mapDispatchToProps = { addData };

export default connect(mapStateToProps, mapDispatchToProps)(Nome);

// como deixar o texto automaticamente em CAIXA ALTA: style={{ textTransform: 'uppercase'}}
// enconteado em consulta ao stackoverflow