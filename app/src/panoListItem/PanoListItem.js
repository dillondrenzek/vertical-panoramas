import React, { Component } from 'react';

class PanoListItem extends Component {

  render() {
    let pano = this.props.pano;

    return (
      <li onClick={(e) => this.props.onClick(pano)}>
        <h3>
          {pano.label}
        </h3>
        <h4>
          <small>location</small> {pano.location.label}
        </h4>
        <h4>
          <small>url</small> {pano.image.src}
        </h4>
        <img src={pano.image.src} height={pano.image.height} width={pano.image.width} alt=""/>
      </li>
    )
  }

}

export default PanoListItem;
