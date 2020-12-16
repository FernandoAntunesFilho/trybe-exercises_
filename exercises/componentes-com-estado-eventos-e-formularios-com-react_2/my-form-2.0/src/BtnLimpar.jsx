import React from 'react';
import { connect } from 'react-redux';
import { addCargo } from '../src/actions/addCargo';
import { addCidade } from '../src/actions/addCidade';
import { addCPF } from '../src/actions/addCPF';
import { addDescricaoCargo } from '../src/actions/addDescricaoCargo';
import { addEmail } from '../src/actions/addEmail';
import { addEndereco } from '../src/actions/addEndereco';
import { addEstado } from '../src/actions/addEstado';
import { addName } from '../src/actions/addName';
import { addResumoCurriculo } from '../src/actions/addResumoCurriculo';
import { addTipo } from '../src/actions/addTipo';

class BtnLimpar extends React.Component {
  constructor(props){
    super(props)

    this.clearStates = this.clearStates.bind(this);
  }

  clearStates() {
    const {
      addCargo,
      addCidade,
      addCPF,
      addDescricaoCargo,
      addEmail,
      addEndereco,
      addEstado,
      addName,
      addResumoCurriculo,
      addTipo,
    } = this.props;

    addCargo('');
    addCidade('');
    addCPF('');
    addDescricaoCargo('');
    addEmail('');
    addEndereco('');
    addEstado('');
    addName('');
    addResumoCurriculo('');
    addTipo('');
  }

  render() {
    return(
      <button onClick={ this.clearStates }>Apagar Dados</button>
    )
  }
}

const mapDispatchToProps = {
  addCargo,
  addCidade,
  addCPF,
  addDescricaoCargo,
  addEmail,
  addEndereco,
  addEstado,
  addName,
  addResumoCurriculo,
  addTipo,
}

export default connect(null, mapDispatchToProps)(BtnLimpar);