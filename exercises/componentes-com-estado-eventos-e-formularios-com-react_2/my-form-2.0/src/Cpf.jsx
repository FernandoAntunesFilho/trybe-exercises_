import React from 'react';
import { connect } from 'react-redux';
import { addCPF } from '../src/actions/addCPF';

class CPF extends React.Component {
  render() {
    const { cpf, addCPF } = this.props;
    return(
      <input
        name='cpf'
        type='number'
        placeholder='CPF'
        maxLength='11'
        required='required'
        value={cpf}
        onChange={(event) => addCPF(event.target.value)}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  cpf: state.listReducer.cpf,
})

const mapDisPatchToProps = { addCPF }

export default connect(mapStateToProps, mapDisPatchToProps)(CPF);
