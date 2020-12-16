import React from 'react';
import { connect } from 'react-redux';
import { addCargo } from '../src/actions/addCargo';

class Cargo extends React.Component {
  constructor() {
    super()

    this.state={
      showAlert: true,
    }
  }

  showAlert = () => {
    const status = this.state.showAlert
    if (status === true) {
      this.setState({
        showAlert: false,
      })
      alert('Preencha com cuidado esta informação.')
    }
  }

  render() {
    const {cargo, addCargo} = this.props;
    return(
      <div>
        <label>Cargo</label>
        <textarea 
        name='cargo'
        maxLength='40'
        required='required'
        onMouseEnter={this.showAlert}
        value={ cargo }
        onChange={ (event) => addCargo(event.target.value) } />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cargo: state.listReducer.cargo,
});

const mapDispatchToProps = { addCargo };

export default connect(mapStateToProps, mapDispatchToProps)(Cargo);
