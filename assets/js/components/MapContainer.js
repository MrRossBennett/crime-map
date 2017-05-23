import React, { Component } from 'react';

import Map from './Map.js';
import { getCrimes } from '../data.js';

class MapContainer extends Component {

	constructor(props) {
		super(props);
		// We'll store the crime locations here.
		this.state = {};
	}

	componentWillMount() {
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
			// Update state with these markers
			this.setState({ markers });
		});

		plotCrimes();
	}

	render() {
		return (
			<div style={{ height: '100vh' }}>
				<Map
					containerElement={
						<div style={{ height: '100%' }} />
					}
					mapElement={
						<div style={{ height: '100%' }} />
					}
					onMapLoad={this.handleMapLoad}
					onMapClick={this.handleMapClick}
					markers={this.state.markers}
					onMarkerRightClick={this.handleMarkerRightClick}
				/>
			</div>
		);
	}
}

export default MapContainer;
