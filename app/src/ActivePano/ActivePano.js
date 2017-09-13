import React, { Component } from 'react';

class ActivePano extends Component {

  render() {
    // active Pano
    let activePano = this.props.activePano;

    // Label
    let Label = (props) => {
      return (props.label)
        ? (<label>
            <h2>{props.label}</h2>
          </label>)
        : (<label></label>);
    }

    // Location
    let Location = ({location}) => {
      let latitude = (location.latitude)
        ? (<div>
          <h4>latitude</h4>
          <p>{location.latitude.value} {location.latitude.direction}</p>
        </div>)
        : null;
      let longitude = (location.longitude)
        ? (<div>
          <h4>longitude</h4>
          <p>{location.longitude.value} {location.longitude.direction}</p>
        </div>)
        : null;

      return (location)
        ? (<div>
            <h3>Location</h3>
            <div>{location.label}</div>
            {latitude}
            {longitude}
          </div>)
        : (<div></div>);
    }

    // Image
    let Image = ({displayImage, image}) => {
      // if displayImage === true, show <img>
      return (displayImage)
        ? (<div>image</div>)
        : (<div>
          <h3>Image</h3>
          <div>
            <h4>height</h4>
            <p>{image.height}</p>
          </div>
          <div>
            <h4>width</h4>
            <p>{image.width}</p>
          </div>
          <div>
            <h4>src</h4>
            <p>{image.src}</p>
          </div>
        </div>);
    }



    return (
      <div className="ActivePano">
        <h2>Active Pano</h2>

        {activePano &&
        <div className="Pano">
          <Image image={activePano.image} displayImage={false}/>
          <Label label={activePano.label}/>
          <Location location={activePano.location}/>
        </div>}

        {!activePano &&
        <div className="Pano empty">
          No Active Pano.
        </div>}

      </div>
    )
  }
}

export default ActivePano;
