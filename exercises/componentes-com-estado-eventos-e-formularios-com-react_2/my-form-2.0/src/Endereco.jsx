import React from 'react';
import { connect } from 'react-redux';
import { addEndereco } from '../src/actions/addEndereco';

class Endereco extends React.Component {
  render() {
    const { endereco, addEndereco } = this.props;
    return(
      <input
        name='endereco'
        type='text'
        placeholder='Endereço'
        maxLength='200'
        required='required'
        defaultValue={endereco}
        onChange={(event) => addEndereco(event.target.value)}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  endereco: state.listReducer.endereco,
})

const mapDispatchToProps = { addEndereco }

export default connect(mapStateToProps, mapDispatchToProps)(Endereco);
