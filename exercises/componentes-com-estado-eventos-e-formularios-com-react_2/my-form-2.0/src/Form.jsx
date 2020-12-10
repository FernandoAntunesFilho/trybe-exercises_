import React from 'react';
import { connect } from 'react-redux';
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

  handleChange = ({target}) => {
    const {name, value} = target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const {
      nome,
      email,
      cpf,
      endereco,
      cidade,
      estado,
      tipo,
      resumoCurriculo,
      cargo,
      descricaoCargo
    } = this.props;

    return(
      <div>
        <form>
          <fieldset className='form'>
          <legend>Dados Pessoais</legend>
            <Nome />
            <Email valor={email} handleChange={this.handleChange} />
            <Cpf valor={cpf} handleChange={this.handleChange} />
            <Endereco valor={endereco} handleChange={this.handleChange} />
            <Cidade valor={cidade} handleChange={this.handleChange} />
            <Estado valor={estado} handleChange={this.handleChange} />
            <Tipo valor={tipo} handleChange={this.handleChange} />
          </fieldset>

          <fieldset className='form'>
          <legend>Dados do último emprego</legend>
            <ResumoCurriculo valor={resumoCurriculo} handleChange={this.handleChange} />
            <Cargo valor={cargo} handleChange={this.handleChange} />
            <DescricaoCargo valor={descricaoCargo} handleChange={this.handleChange} />
          </fieldset>
        </form>
        <BtnConsolidar estados={this.state} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  nome: state.listReducer.nome,
  email: state.listReducer.email,
  cpf: state.listReducer.cpf,
  endereco: state.listReducer.endereco,
  cidade: state.listReducer.cidade,
  estado: state.listReducer.estado,
  tipo: state.listReducer.tipo,
  resumoCurriculo: state.listReducer.resumoCurriculo,
  cargo: state.listReducer.cargo,
  descricaoCargo: state.listReducer.descricaoCargo,
})

export default connect(mapStateToProps)(Form);