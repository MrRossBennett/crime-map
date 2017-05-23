import React, { Component } from 'react';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';
import MapStyles from "../MapStyles.json";

// The Google Maps View
const Map = withGoogleMap((props) => {
  return (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={16}
      defaultCenter={{ lat: 51.515419, lng: -0.141099 }}
      defaultOptions={{ styles: MapStyles }}
      onClick={props.onMapClick}
    >
      {props.markers && props.markers.map(marker => (
        <Marker
          {...marker}
        />
      ))}
    </GoogleMap>
  );
});

export default Map;
