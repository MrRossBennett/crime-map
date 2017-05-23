import axios from 'axios';

// Function that fetches the location of crimes that have taken place within a 1 mile radius of Oxford Street during the last month.
const getCrimes = () => {
	return axios.get('https://data.police.uk/api/crimes-street/all-crime?lat=51.515419&lng=-0.141099');
};

export {
	getCrimes,
};
