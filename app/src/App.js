import React, { Component } from 'react';
import './App.css';

import MockPanos from './MockPanos';
import PanoList from './PanoList';

class App extends Component {
  render() {
    let panos = MockPanos;

    return (
      <div className="App">
        <div>Vertical Panoramas</div>
        {/* <SelectedPano /> */}
        <PanoList panos={panos} />
      </div>
    );
  }
}

export default App;
