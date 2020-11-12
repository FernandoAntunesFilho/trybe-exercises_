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
    return(
      <div>
        <label>Cargo</label>
        <textarea 
        name='cargo'
        maxLength='40'
        required='required'
        onMouseEnter={this.showAlert} />
      </div>
    )
  }
}

export default Cargo;
