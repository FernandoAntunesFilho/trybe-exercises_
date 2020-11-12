import React from 'react';

class ResumoCurriculo extends React.Component {
  render() {
    return(
      <div>
        <label>Resumo do Currículo</label>
        <textarea 
        name='resumoCurriculo'
        maxLength='1000'
        required='required' />
      </div>
    )
  }
}

export default ResumoCurriculo;
