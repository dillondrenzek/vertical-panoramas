import React, { Component } from 'react';
import './PanoListItem.css';

class PanoListItem extends Component {

  render() {
    let pano = this.props.pano;
    let isSelected = this.props.selected;

    // include 'selected' class name
    let classNames = [
      (isSelected) ? "selected" : "",
      "list-item"
    ].join(' ');

    // Decide content based on selected state
    let content = (isSelected)
      ? (
        // when selected
        <div className="vertical-center">
          <h3>Back to List</h3>
        </div>
      ) : (
        // when not selected
        <div className="vertical-center">
          <h3>
            {pano.label}
          </h3>
          <h4>
            {pano.location.label}
          </h4>
        </div>
      );

    return (
      <div className={classNames} onClick={(e) => this.props.onClick(pano)}>
        <div className="list-item-title">
          {content}
        </div>
        <figure>
          <img src={"/img/"+pano.image.src} height={pano.image.height} width={pano.image.width} alt=""/>
        </figure>
      </div>
    )
  }

}

export default PanoListItem;
