import React, { Component } from 'react';

import Map from './Map.js';
import { getCrimes } from '../utils/Get.js';

class MapContainer extends Component {

  constructor(props) {
    super(props);
    // We'll store the crime locations here.
    this.state = {};
  }

  componentDidMount() {
    // Get list of crime locations from the API
    const plotCrimes = () => getCrimes().then((results) => {

      const markers = results.data.map((item, index) => {

        // API returns Lat and Long as strings. Converting...
        let crimeLat = parseFloat(item.location.latitude);
        let crimeLong = parseFloat(item.location.longitude);

        // Transform list into a format expected by the react-google-maps component
        return {
          position: {
            lat: crimeLat,
            lng: crimeLong,
          },
          key: index
        };
      });

      // Update the state with these markers
      this.setState({
        loading: false,
        markers
      });
    });

    plotCrimes();
  }

  render() {
    return (
      <div className="map-wrap">
        <Map
          containerElement={
            <div className="map-inner" />
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
          markers={this.state.markers}
          onMarkerClick={this.handleMarkerClick}
          onMarkerClose={this.handleMarkerClose}
        />
      </div>
    );
  }
}

export default MapContainer;
