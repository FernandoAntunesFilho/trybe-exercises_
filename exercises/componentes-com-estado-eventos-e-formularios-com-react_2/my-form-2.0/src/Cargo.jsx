import React from 'react';

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
    const {valor, handleChange} = this.props;
    return(
      <div>
        <label>Cargo</label>
        <textarea 
        name='cargo'
        maxLength='40'
        required='required'
        onMouseEnter={this.showAlert}
        value={valor}
        onChange={handleChange} />
      </div>
    )
  }
}

export default Cargo;
