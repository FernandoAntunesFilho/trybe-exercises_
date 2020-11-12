import React from 'react';

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
      descricaoCargo} = this.props.estados;

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

export default ResumoCv;
