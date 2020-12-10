import React from 'react';
import { connect } from 'react-redux';

class Estado extends React.Component {
  render() {
    const { estado} = this.props;
    return(
      <select name='estado' required='required' defaultValue={ estado } >
        <option>Estado</option>
        <option>Acre (AC)</option>
        <option>Alagoas (AL)</option>
        <option>Amapá (AP)</option>
        <option>Amazonas (AM)</option>
        <option>Bahia (BA)</option>
        <option>Ceará (CE)</option>
        <option>Distrito Federal (DF)</option>
        <option>Espírito Santo (ES)</option>
        <option>Goiás (GO)</option>
        <option>Maranhão (MA)</option>
        <option>Mato Grosso (MT)</option>
        <option>Mato Grosso do Sul (MS)</option>
        <option>Minas Gerais (MG)</option>
        <option>Pará (PA)</option>
        <option>Paraíba (PB)</option>
        <option>Paraná (PR)</option>
        <option>Pernambuco (PE)</option>
        <option>Piauí (PI)</option>
        <option>Rio de Janeiro (RJ)</option>
        <option>Rio Grande do Norte (RN)</option>
        <option>Rio Grande do Sul (RS)</option>
        <option>Rondônia (RO)</option>
        <option>Roraima (RR)</option>
        <option>Santa Catarina (SC)</option>
        <option>São Paulo (SP)</option>
        <option>Sergipe (SE)</option>
        <option>Tocantins (TO)</option>
      </select>
    )
  }
}

const mapStateToProps = (state) => ({
  estado: state.listReducer.estado,
})

export default connect(mapStateToProps)(Estado);
