import React from 'react';
import { connect } from 'react-redux';
import { addEmail } from '../src/actions/addEmail';

class Email extends React.Component {  
  render() {
    const { email, addEmail } = this.props;
    return(
      <input
        name='email'
        type='email'
        placeholder='E-mail'
        maxLength='50'
        required='required'
        defaultValue={email}
        onChange={(event) => addEmail(event.target.value)}
      />
    )
  }
}

const mapStatetoProps = (state) => ({
  email: state.listReducer.email,
})

const mapDisPatchToProps = { addEmail }

export default connect(mapStatetoProps, mapDisPatchToProps)(Email);
