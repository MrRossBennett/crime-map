import axios from 'axios';

// Fetching the location of crimes that have taken place within a 1 mile radius of York city centre during the last month.
const getCrimes = () => {
  return axios.get('https://data.police.uk/api/crimes-street/all-crime?lat=53.9551714&lng=-1.1006137');
};

export {
  getCrimes,
};
