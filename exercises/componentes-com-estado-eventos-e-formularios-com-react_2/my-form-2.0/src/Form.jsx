import React from 'react';
import './Form.css'
import Nome from './Nome';
import Email from './Email';
import Cpf from './Cpf';
import Endereco from './Endereco';
import Cidade from './Cidade';
import Estado from './Estado';
import Tipo from './Tipo';
import ResumoCurriculo from './ResumoCurriculo';
import Cargo from './Cargo';
import DescricaoCargo from './DescricaoCargo';
import BtnConsolidar from './BtnConsolidar';

class Form extends React.Component {
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

  handleChange = ({target}) => {
    const {name, value} = target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <div>
        <form>
          <fieldset className='form'>
          <legend>Dados Pessoais</legend>
            <Nome valor={this.state.nome} handleChange={this.handleChange} />
            <Email valor={this.state.email} handleChange={this.handleChange} />
            <Cpf valor={this.state.cpf} handleChange={this.handleChange} />
            <Endereco valor={this.state.endereco} handleChange={this.handleChange} />
            <Cidade valor={this.state.cidade} handleChange={this.handleChange} />
            <Estado valor={this.state.estado} handleChange={this.handleChange} />
            <Tipo valor={this.state.tipo} handleChange={this.handleChange} />
          </fieldset>

          <fieldset className='form'>
          <legend>Dados do último emprego</legend>
            <ResumoCurriculo valor={this.state.resumoCurriculo} handleChange={this.handleChange} />
            <Cargo valor={this.state.cargo} handleChange={this.handleChange} />
            <DescricaoCargo valor={this.state.descricaoCargo} handleChange={this.handleChange} />
          </fieldset>
        </form>
        <BtnConsolidar />
      </div>
    )
  }
}

export default Form;