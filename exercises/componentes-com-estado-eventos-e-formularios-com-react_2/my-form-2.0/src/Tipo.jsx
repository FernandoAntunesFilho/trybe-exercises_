import React from 'react';
import { connect } from 'react-redux';

class Tipo extends React.Component {
  render() {
    const {handleChange} = this.props;
    return(
      <div>
        <input type='radio' name='tipo' id='Casa' value='Casa' onChange={handleChange}></input>
        <label htmlFor='Casa'>Casa</label>
        <input type='radio' name='tipo' id='Apartamento' value='Apartamento' onChange={handleChange}></input>
        <label htmlFor='Apartamento'>Apartamento</label>
      </div>
    )
  }
}

export default Tipo;
