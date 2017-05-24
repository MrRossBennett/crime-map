import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import MapContainer from './MapContainer.js';

const App = () => {
  return (
    <div className="crime-app">
      <Header
        title="Crime Map 2017"
        intro="Locations of street level crimes that have taken place within a 1 mile radius of York city centre during the last month."
       />
       <MapContainer />
      <Footer info="Powered by React and data.police.uk" />
    </div>
  )
}

export default App;
