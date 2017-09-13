import React, { Component } from 'react';

import PanoListItem from '../PanoListItem/PanoListItem';

class PanoList extends Component {

  handleListItemClick(e) {
    console.log('clicked list item:', e);
    this.props.onSelectPano(e);
  }

  render() {
    let panos = this.props.panos

    return (
      <div>
        <h2>Pano List</h2>
        <ul>
          {panos.map((x, index) =>
            <PanoListItem key={index} pano={x} onClick={(e) => this.handleListItemClick(e)}/>
          )}
        </ul>
      </div>

    )
  }
}

export default PanoList;
