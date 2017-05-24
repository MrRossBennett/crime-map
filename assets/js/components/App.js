import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import MapContainer from './MapContainer.js';

class App extends Component {
  render() {
    return (
      <div className="crime-app">
        <Header
          title="Crime Map 2017"
          intro="Locations of street level crimes that have taken place within a 1 mile radius of London's Oxford Street during the last month."
         />
        <MapContainer />
        <Footer info="Powered by React.js" />
      </div>
    );
  }
}

export default App;
