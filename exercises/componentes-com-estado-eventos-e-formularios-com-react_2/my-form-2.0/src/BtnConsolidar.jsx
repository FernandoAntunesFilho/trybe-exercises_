import React from 'react';
import ResumoCv from './ResumoCv';

class BtnConsolidar extends React.Component {
  constructor() {
    super()

    this.state={
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      resumoCurriculo: '',
      cargo: '',
      descricaoCargo: '',
    }
  }

  setStates = () => {
    this.setState({
      nome: `Nome: ${this.props.estados.nome}`,
      email: `Email: ${this.props.estados.email}`,
      cpf: `CPF: ${this.props.estados.cpf}`,
      endereco: `Endereço: ${this.props.estados.endereco}`,
      cidade: `Cidade: ${this.props.estados.cidade}`,
      estado: `Estado: ${this.props.estados.estado}`,
      tipo: `Tipo de residência: ${this.props.estados.tipo}`,
      resumoCurriculo: `Resumo do currículo: ${this.props.estados.resumoCurriculo}`,
      cargo: `Cargo: ${this.props.estados.cargo}`,
      descricaoCargo: `Descrição do cargo: ${this.props.estados.descricaoCargo}`,
    })
  }

  render() {
    return(
      <div>
        <button onClick={this.setStates}>Consolidar Dados</button>
        <ResumoCv estados={this.state} />
      </div>
    )
  }
}

export default BtnConsolidar;
