import React from 'react';
import { connect } from 'react-redux';
import { addDescricaoCargo } from '../src/actions/addDescricaoCargo';

class DescricaoCargo extends React.Component {
  render() {
    const {descricaoCargo, addDescricaoCargo} = this.props;
    return(
      <input
        name='descricaoCargo'
        type='text'
        placeholder='Descrição do cargo'
        maxLength='500'
        required='required'
        value={ descricaoCargo }
        onChange={ (event) => addDescricaoCargo(event.target.value) }>
      </input>
    )
  }
}

const mapStateToProps = (state) => ({
  descricaoCargo: state.listReducer.descricaoCargo
});

const mapDispatchToProps = { addDescricaoCargo }

export default connect(mapStateToProps, mapDispatchToProps)(DescricaoCargo);
