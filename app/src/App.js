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
    console.log('yep');
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
        <div>Vertical Panoramas</div>
        <ActivePano activePano={activePano} />
        <PanoList panos={panos} onSelectPano={(e) => this.handleSelectPano(e)}/>
      </div>
    );
  }
}

export default App;
