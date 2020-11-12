import React from 'react';

class Email extends React.Component {  
  render() {
    const {valor, handleChange} = this.props;
    return(
      <input
        name='email'
        type='email'
        placeholder='E-mail'
        maxLength='50'
        required='required'
        value={valor}
        onChange={handleChange}>
      </input>
    )
  }
}

export default Email;
