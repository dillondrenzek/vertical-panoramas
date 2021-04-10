import React, { Component } from 'react';
import "./ActivePano.css";


import ActivePanoTitle from './ActivePanoTitle';

class ActivePano extends Component {

  render() {
    // active Pano
    let activePano = this.props.activePano;

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
        <section className="title">
          <ActivePanoTitle activePano={activePano} />
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
