import axios from 'axios';

// Fetching the location of crimes that have taken place within a 1 mile radius of Oxford Street during the last month.
const getCrimes = () => {
  return axios.get('https://data.police.uk/api/crimes-street/all-crime?lat=50.9998236&lng=-3.0889258');
};

export {
  getCrimes,
};
