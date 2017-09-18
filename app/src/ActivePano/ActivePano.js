import React, { Component } from 'react';
import "./ActivePano.css";

import LatLong from './LatLong/LatLong';

class ActivePano extends Component {

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

    // Image
    let Image = ({displayImage, image}) => {
      // if displayImage === true, show <img>
      return (displayImage || !image)
        ? (<figure>
          <img src={"/img/"+image.src} height={image.height} width={image.width} alt=""/>
        </figure>)
        : (<figure>
          <div>No image</div>
        </figure>);
    }

    console.log('activePano.label', activePano && activePano.label);
    console.log('activePano.location', activePano && activePano.location);

    return (activePano) ? (
      <div className="ActivePano">
        <section>
          <div className="vertical-center">
            <Label label={activePano.label}/>
            <Location location={activePano.location}/>
          </div>
        </section>

        <section>
          <Image image={activePano.image} displayImage={true}/>
        </section>

        <section>

        </section>
      </div>
      ) : (
      <div className="Pano empty">
        No Active Pano.
      </div>
    );
  }
}

export default ActivePano;
