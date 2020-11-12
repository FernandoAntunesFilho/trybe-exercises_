import React from 'react';

class ResumoCurriculo extends React.Component {
  render() {
    return(
      <textarea 
      name='resumoCurriculo'
      maxLength='1000'
      required='required' />
    )
  }
}

export default ResumoCurriculo;
