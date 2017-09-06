import React, { Component } from 'react';

import PanoListItem from './PanoListItem';

class PanoList extends Component {

  constructor(props) { super() ;}

  render() {
    let panos = this.props.panos

    return (
      <ul>
        {panos.map((x, index) =>
          <PanoListItem pano={x} key={index}/>
        )}
      </ul>
    )
  }
}

export default PanoList;
