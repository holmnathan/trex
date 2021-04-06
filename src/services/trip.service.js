import axios from 'axios';
import authHeader from './auth-header'; // If User has Auth JWT in local storage; submit with API request.
const { REACT_APP_TREX_API_URL } = process.env;

// Routes ---------------------------------------------------------------------
const getPublicContent = () => {
  return axios.get(`${REACT_APP_TREX_API_URL}/trip/test`);
};

// Protected Routes -----------------------------------------------------------
const getTestAuthorized = () => {
  return axios.get(`${REACT_APP_TREX_API_URL}/trip/test-authorized`, {
    headers: authHeader(),
  });
};

const addTrip = (tripObject) => {
  const apiUrl = `${REACT_APP_TREX_API_URL}/trip/add`;
  return axios.post(apiUrl, tripObject, {
    headers: authHeader(),
  });
};

export { getPublicContent, getTestAuthorized, addTrip };
