import React, { Component } from 'react';
import { GoogleMap, Marker, withGoogleMap, InfoWindow } from 'react-google-maps';
import IconReact from '../icons/Logo';
import MapStyles from "../constants/mapStyles.json";

// The Google Map View
const Map = withGoogleMap((props) => {
  return (
    <div>
      {!props &&
        // Waiting for data to load from API
        <IconReact width="200" height="200" fill="#0E4F64" />
      }
      <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={16}
        defaultCenter={{
          lat: 53.9551714,
          lng: -1.1006137
        }}
        defaultOptions={{
          styles: MapStyles,
          scrollwheel: false
        }}
        onClick={props.onMapClick}
      >
        {props.markers && props.markers.map((marker, index) => (
          <Marker
            {...marker}
          >
          </Marker>
        ))}
      </GoogleMap>
    </div>
  );
});

export default Map;
