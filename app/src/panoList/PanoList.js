import React, { Component } from 'react';

import PanoListItem from '../PanoListItem/PanoListItem';

import './PanoList.css';
class PanoList extends Component {

  handleListItemClick(e) {
    this.props.onSelectPano(e);
  }

  render() {
    let panos = this.props.panos;
    let activePano = this.props.activePano;

    return (
      <ul>
        {panos.map((pano, index) =>
          <li>
            <PanoListItem key={index} pano={pano} selected={(pano === activePano)} onClick={(e) => this.handleListItemClick(e)}/>
          </li>
        )}
      </ul>
  )
  }
}

export default PanoList;
