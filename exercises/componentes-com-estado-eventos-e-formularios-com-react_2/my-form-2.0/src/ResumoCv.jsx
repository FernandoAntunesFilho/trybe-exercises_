import React from 'react';
import { connect } from 'react-redux';

class ResumoCv extends React.Component {
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
      descricaoCargo} = this.props.resumo;

    return(
      <div>
        <fieldset>
          <p>{nome}</p>
          <p>{email}</p>
          <p>{cpf}</p>
          <p>{endereco}</p>
          <p>{cidade}</p>
          <p>{estado}</p>
          <p>{tipo}</p>
          <p>{resumoCurriculo}</p>
          <p>{cargo}</p>
          <p>{descricaoCargo}</p>  
        </fieldset>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  resumo: state.listReducer
})

export default connect(mapStateToProps)(ResumoCv);
