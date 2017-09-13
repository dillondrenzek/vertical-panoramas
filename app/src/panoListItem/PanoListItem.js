import React, { Component } from 'react';
import './PanoListItem.css';

class PanoListItem extends Component {

  render() {
    let pano = this.props.pano;
    let isSelected = this.props.selected;

    let className = (isSelected) ? "selected" : "";

    return (
      <div className={"list-item " + className} onClick={(e) => this.props.onClick(pano)}>
        <div className="list-item-title">
          <h3>
            {pano.label}
          </h3>
          <h4>
            <small>location</small> {pano.location.label}
          </h4>
          <h4>
            <small>url</small> {pano.image.src}
          </h4>
        </div>
        <figure>
          <img src={"/img/"+pano.image.src} height={pano.image.height} width={pano.image.width} alt=""/>
        </figure>
      </div>
    )
  }

}

export default PanoListItem;
