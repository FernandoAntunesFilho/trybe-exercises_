import React from 'react';
import { connect } from 'react-redux';

class CPF extends React.Component {
  render() {
    const { cpf } = this.props;
    return(
      <input
        name='cpf'
        type='number'
        placeholder='CPF'
        maxLength='11'
        required='required'
        defaultValue={cpf}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  cpf: state.listReducer.cpf,
})

export default connect(mapStateToProps)(CPF);
