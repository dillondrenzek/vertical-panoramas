import React, { Component } from 'react';
import './App.css';

import AppTitle from './AppTitle/AppTitle';
import PanoList from './PanoList/PanoList';
import ActivePano from './ActivePano/ActivePano';

import MockPanos from './MockPanos';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { activePano: null };
  }

  handleSelectPano(pano) {

    if (this.state.activePano) pano = null;
    
    // change state.activePano
    this.setState(Object.assign(this.state, {
      activePano: pano
    }));
  }

  render() {
    let activePano = this.state.activePano,
      panos = MockPanos,
      pageStyle = { top: '0%' };

    if (activePano) {
      pageStyle.top = '-84%';
    }

    return (
      <div className="App">
        <div className="page" style={pageStyle}>
          <div className="app-title">
            <AppTitle title="Vertical Panoramas"/>
          </div>
          <div className="pano-list">
            <PanoList panos={panos} activePano={activePano} onSelectPano={(e) => this.handleSelectPano(e)}/>
          </div>
          <div className="active-pano">
            <ActivePano activePano={activePano} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
