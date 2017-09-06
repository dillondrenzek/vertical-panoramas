import React, { Component } from 'react';

class ActivePano extends Component {

  constructor(props) { super(props); }

  render() {
    let activePano = this.props.activePano;

    return (
      <div>
        <h2>Active Pano</h2>
        <div>{ JSON.stringify(activePano) }</div>
      </div>
    )
  }
}

export default ActivePano;
