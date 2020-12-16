import React from 'react';
import ResumoCv from './ResumoCv';

class BtnConsolidar extends React.Component {
  constructor() {
    super()

    this.state={
      showComponent: false,
    }

    this.clickButton = this.clickButton.bind(this);
  }

  clickButton() {
    this.setState({
      showComponent: true,
    });
  }

  render() {
    return(
      <div>
        <button onClick={ this.clickButton }>Consolidar Dados</button>
        { this.state.showComponent ?
            <ResumoCv /> :
            null
        }
      </div>
    )
  }
}

export default BtnConsolidar;
