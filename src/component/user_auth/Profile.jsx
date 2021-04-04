import React from 'react';
import AuthService from '../../services/auth.service';

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  const hasDisplayName = currentUser.displayName ? (
    <p>
      <strong>Display Name:</strong> {currentUser.displayName}
    </p>
  ) : null;
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong>{' '}
        {`${currentUser.token.substring(7, 20)} …
        ${currentUser.token.substr(currentUser.token.length - 20)}`}
      </p>
      <p>
        <strong>User ID:</strong> {currentUser._id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <p>
        <strong>Full Name:</strong> {currentUser.fullName}
      </p>
      {hasDisplayName}
    </div>
  );
};

export default Profile;
