import React, { Component } from 'react';
import './App.css';

import MockPanos from './MockPanos';
import PanoList from './PanoList/PanoList';
import ActivePano from './ActivePano/ActivePano';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { activePano: null };
  }

  handleSelectPano(pano) {
    // change state.activePano
    this.setState(Object.assign(this.state, {
      activePano: pano
    }));
  }

  render() {
    let activePano = this.state.activePano;
    let panos = MockPanos;

    return (
      <div className="App">
        <div className="app-title">Vertical Panoramas</div>
        <div className="pano-list">
          <PanoList panos={panos} activePano={activePano} onSelectPano={(e) => this.handleSelectPano(e)}/>
        </div>
        <div className="active-pano">
          <ActivePano activePano={activePano} />
        </div>
      </div>
    );
  }
}

export default App;
