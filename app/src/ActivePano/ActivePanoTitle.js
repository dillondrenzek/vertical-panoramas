import React, { Component } from 'react';
import "./ActivePanoTitle.css";

import LatLong from './LatLong';

class ActivePanoTitle extends Component {


  render() {

    // active Pano
    let activePano = this.props.activePano;

    // Label
    let Label = ({label}) => {

      return (label)
        ? (<label>
            <h2>{label}</h2>
          </label>)
        : (<label></label>);
    }

    // Location
    let Location = ({location}) => {
      console.log('location', location);
      if (location) {
        let label = location.label;
        let lat= location.latitude;
        let lon = location.longitude;
        // console.log('lat', lat);
        // console.log('lon', lon);

        return (<div className="location">
            <div>{label}</div>
            <LatLong latitude={lat} longitude={lon} />
          </div>);
      } else {
        // No location
        return (<div></div>);
      }
    }

    return (
      <div className="ActivePanoTitle">
        <div className="vertical-center">
          <Label label={activePano.label}/>
          <Location location={activePano.location}/>
        </div>
      </div>
    );
  }
}

export default ActivePanoTitle;
