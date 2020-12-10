import React from 'react';

class BtnLimpar extends React.Component {
  render() {
    const {clearStates} = this.props
    return(
      <button onClick={clearStates}>Apagar Dados</button>
    )
  }
}

export default BtnLimpar;