import React from 'react';

class Tipo extends React.Component {
  render() {
    return(
      <div>
        <input type='radio' name='tipo' id='casa' value='Casa'></input>
        <label htmlFor='casa'>Casa</label>
        <input type='radio' name='tipo' id='apartamento' value='Apartamento'></input>
        <label htmlFor='apartamento'>Apartamento</label>
      </div>
    )
  }
}

export default Tipo;
