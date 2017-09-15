import React, { Component } from 'react';
import "./ActivePano.css";

class ActivePano extends Component {

  render() {
    // active Pano
    let activePano = this.props.activePano;

    // Label
    let Label = ({_label}) => {
      return (_label)
        ? (<label>
            <h2>{_label}</h2>
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
        ? (<figure>
          <img src={"/img/"+image.src} height={image.height} width={image.width} alt=""/>
        </figure>)
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



    return (activePano) ? (
      <div className="ActivePano">
        <section>
          <Label label={activePano.label}/>
          <Location location={activePano.location}/>
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
