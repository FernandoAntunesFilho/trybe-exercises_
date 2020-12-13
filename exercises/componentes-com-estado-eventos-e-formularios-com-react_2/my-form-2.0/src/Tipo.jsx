import React from 'react';
import { connect } from 'react-redux';
import { addTipo } from '../src/actions/addTipo';

class Tipo extends React.Component {
  render() {
    
    return(
      <div>
        <input
          type='radio'
          name='tipo'
          id='Casa'
          value='Casa'
          onChange={(event) => } // <===== CONTINUAR DAQUI
        />
        <label htmlFor='Casa'>Casa</label>

        <input
          type='radio'
          name='tipo'
          id='Apartamento'
          value='Apartamento'
        />
        <label htmlFor='Apartamento'>Apartamento</label>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tipo: state.listReducer.tipo,
})

export default connect(mapStateToProps)(Tipo);

// MUDAR TODO O RACIOCINIO, PORQUE QUERO MANDAR INFORMAÇÕES PARA O STATE DO REDUX, E NÃO RECEBER...
