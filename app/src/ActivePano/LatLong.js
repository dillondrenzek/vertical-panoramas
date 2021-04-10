import React, { Component } from 'react';
// import "./ActivePano.css";

class LatLong extends Component {


  render() {

    const lat = (this.props.latitude) ? this.props.latitude : null;
    const lon = (this.props.longitude) ? this.props.longitude : null;

    // console.log('lat', lat);
    // console.log('lon', lon);

    let latVal = (lat) ? lat.value : '';
    let latDir = (lat) ? lat.direction : '';
    let lonVal = (lon) ? lon.value : '';
    let lonDir = (lon) ? lon.direction : '';


    return (
      <div className=".LatLong">
        <span>{latVal} {latDir}</span>
        <span>{lonVal} {lonDir}</span>
      </div>
    );
  }
}

export default LatLong;
