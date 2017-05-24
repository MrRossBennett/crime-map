import React, { Component } from 'react';

import Map from './Map.js';
import { getCrimes } from '../utils/api.js';

export default class MapContainer extends Component {

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

        return {
          position: {
            lat: crimeLat,
            lng: crimeLong,
          },
          showInfo: false,
          infoContent: item.location.street.name,
          key: index
        };
      });

      // Update the state with map markers
      this.setState({
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
          onMarkerClick={this.handleMarkerClick} // TO DO
          onMarkerClose={this.handleMarkerClose} // TO DO
        />
      </div>
    );
  }
}
