import React from 'react';

class ResumoCurriculo extends React.Component {
  render() {
    const {valor, handleChange} = this.props;
    return(
      <div>
        <label>Resumo do Currículo</label>
        <textarea 
        name='resumoCurriculo'
        maxLength='1000'
        required='required'
        value={valor}
        onChange={handleChange} />
      </div>
    )
  }
}

export default ResumoCurriculo;
