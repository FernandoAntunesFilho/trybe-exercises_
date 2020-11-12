import React from 'react';

class Email extends React.Component {
  render() {
    return(
      <input
        name='email'
        type='email'
        placeholder='E-mail'
        maxLength='50'
        required='required'>
      </input>
    )
  }
}

export default Email;
