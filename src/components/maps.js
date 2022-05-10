import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Maps extends Component {
  static defaultProps = {
    center: {
      lat: -34.927406,
      lng: 138.601905
    },
    zoom: 2
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="container" style={{ height: '300px', width: '450px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBVtEM_ixazpJr8jOBEPdsbz6W1UxdGRLY" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Maps;