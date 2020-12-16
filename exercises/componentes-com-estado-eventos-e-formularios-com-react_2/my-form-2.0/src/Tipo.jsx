import React from 'react';
import { connect } from 'react-redux';
import { addTipo } from '../src/actions/addTipo';

class Tipo extends React.Component {
  render() {
    const {addTipo} = this.props;
    return(
      <div>
        <input
          type='radio'
          name='tipo'
          id='Casa'
          value='Casa'
          onChange={(event) => addTipo(event.target.value) }
        />
        <label htmlFor='Casa'>Casa</label>

        <input
          type='radio'
          name='tipo'
          id='Apartamento'
          value='Apartamento'
          onChange={(event) => addTipo(event.target.value) }
        />
        <label htmlFor='Apartamento'>Apartamento</label>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tipo: state.listReducer.tipo,
})

const mapDispatchToProps = { addTipo };

export default connect(mapStateToProps, mapDispatchToProps)(Tipo);
