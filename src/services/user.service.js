import axios from 'axios';
import authHeader from './auth-header'; // If User has Auth JWT in local storage; submit with API request.
const { REACT_APP_TREX_API_URL } = process.env;

// Routes ---------------------------------------------------------------------
const getPublicContent = () => {
  return axios.get(`${REACT_APP_TREX_API_URL}/user/test`);
};

// Protected Routes -----------------------------------------------------------
const getTestAuthorized = () => {
  return axios.get(`${REACT_APP_TREX_API_URL}/user/test-authorized`, {
    headers: authHeader(),
  });
};

export default { getPublicContent, getTestAuthorized };
