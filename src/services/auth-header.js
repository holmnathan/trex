// Validate User’s JSON Web Authorization Token
const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user')); // Get User from Local Storage

  // Check user exists and has an auth token
  if (user && user.token) {
    // Return token with request
    return { Authorization: user.token };
  } else {
    return {};
  }
};

export default authHeader;
