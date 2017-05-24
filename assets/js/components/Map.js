import React, { Component } from 'react';
import { GoogleMap, Marker, withGoogleMap, InfoWindow } from 'react-google-maps';
import MapStyles from "../constants/mapStyles.json";

// The Google Maps View
const Map = withGoogleMap((props) => {
  return (
    <div>
      {!props &&
        <LoaderComponent />
      }
      <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={16}
        defaultCenter={{ lat: 50.9998236, lng: -3.0889258 }}
        defaultOptions={{
          styles: MapStyles,
          scrollwheel: false
        }}
        onClick={props.onMapClick}

      >
        {props.markers && props.markers.map(marker => (
          <Marker
            {...marker}
          />
        ))}
      </GoogleMap>
    </div>
  );
});

export default Map;
