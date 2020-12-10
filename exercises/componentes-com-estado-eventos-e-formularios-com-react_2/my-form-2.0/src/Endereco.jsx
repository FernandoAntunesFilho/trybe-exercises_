import React from 'react';
import { connect } from 'react-redux';

class Endereco extends React.Component {
  render() {
    const { endereco } = this.props;
    return(
      <input
        name='endereco'
        type='text'
        placeholder='Endereço'
        maxLength='200'
        required='required'
        defaultValue={endereco}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  endereco: state.listReducer.endereco,
})

export default connect(mapStateToProps)(Endereco);
