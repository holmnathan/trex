import axios from 'axios';

const { REACT_APP_TREX_API_URL } = process.env;

const register = async (fullName, email, password) => {
  try {
    const user = await axios.post(`${REACT_APP_TREX_API_URL}/user/register`, {
      fullName,
      email,
      password,
    });
    return user;
  } catch (error) {
    return error.message;
  }
};

const logIn = async (email, password) => {
  try {
    const user = await axios.post(`${REACT_APP_TREX_API_URL}/user/login`, {
      email,
      password,
    });
    console.log(user);
    if (user.data.token) {
      localStorage.setItem('user', JSON.stringify(user.data));
    }
    return user.data;
  } catch (error) {
    return error.message;
  }
};

const logOut = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export default {
  register,
  logIn,
  logOut,
  getCurrentUser,
};
