import React from 'react';
import { connect } from 'react-redux';

class Email extends React.Component {  
  render() {
    const { email } = this.props;
    return(
      <input
        name='email'
        type='email'
        placeholder='E-mail'
        maxLength='50'
        required='required'
        defaultValue={email}
      />
    )
  }
}

const mapStatetoProps = (state) => ({
  email: state.listReducer.email,
})

export default connect(mapStatetoProps)(Email);
