import React from 'react';
import { connect } from 'react-redux';
import { addResumoCurriculo } from '../src/actions/addResumoCurriculo';

class ResumoCurriculo extends React.Component {
  render() {
    const {resumoCurriculo, addResumoCurriculo} = this.props;
    return(
      <div>
        <label>Resumo do Currículo</label>
        <textarea 
        name='resumoCurriculo'
        maxLength='1000'
        required='required'
        value={resumoCurriculo}
        onChange={(event) => addResumoCurriculo(event.target.value) } />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  resumoCurriculo: state.listReducer.resumoCurriculo,
})

const mapDispatchToProps = { addResumoCurriculo };

export default connect(mapStateToProps,mapDispatchToProps)(ResumoCurriculo);
