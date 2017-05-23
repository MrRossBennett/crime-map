import React, { Component } from 'react';
import MapContainer from './MapContainer.js';

class App extends Component {
  render() {
    return (
      <div className="Crime-app">
        <div className="Crime-app-header">
            <h1>Crime Map 2017</h1>
        </div>
        <p className="Crime-app-intro">
          Locations of street level crimes that have taken place within a 1 mile radius of London's Oxford Street during the last month.
        </p>
          <MapContainer />
      </div>
    );
  }
}

export default App;
