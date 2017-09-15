import React, { Component } from 'react';
import './AppTitle.css';

class AppTitle extends Component {

  render() {
    return (
      <div className="AppTitle">
        <h1 className="vertical-center">
          {this.props.title}
        </h1>
      </div>
    )
  }

}

export default AppTitle;
