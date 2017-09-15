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
    // determine new active pano:
    // - if selected the same pano a second time, set to null
    // - else set to pano
    let newActive = (this.state.activePano && (pano === this.state.activePano))
      ? null
      : pano;

    // change state.activePano
    this.setState(Object.assign(this.state, {
      activePano: newActive
    }));
  }


  render() {
    let activePano = this.state.activePano,
      panos = MockPanos,
      top = (this.state.activePano) ? '-84%' : '0%',
      pageStyle = { top: top };

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
