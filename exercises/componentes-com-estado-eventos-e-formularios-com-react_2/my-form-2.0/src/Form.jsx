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
import BtnLimpar from './BtnLimpar';

class Form extends React.Component {

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
        <BtnLimpar />
      </div>
    )
  }
}

export default Form;