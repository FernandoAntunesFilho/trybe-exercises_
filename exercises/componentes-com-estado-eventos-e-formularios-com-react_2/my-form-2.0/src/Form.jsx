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
            <Email />
            <Cpf />
            <Endereco />
            <Cidade />
            <Estado />
            <Tipo />
          </fieldset>

          <fieldset className='form'>
          <legend>Dados do último emprego</legend>
            <ResumoCurriculo />
            <Cargo />
            <DescricaoCargo />
          </fieldset>
        </form>
        <BtnConsolidar />
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