import React from 'react';
import AuthService from '../../services/auth.service';
import Modal from '../Modal';

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  const hasDisplayName = currentUser.displayName ? (
    <>
      <dt>Display Name</dt>
      <dd>{currentUser.displayName}</dd>
    </>
  ) : null;

  const body = (
    <dl>
      <dt>Full Name</dt>
      <dd>{currentUser.fullName}</dd>
      {hasDisplayName}
      <dt>Email</dt>
      <dd>{currentUser.email}</dd>
      <dt>User ID</dt>
      <dd>{currentUser._id}</dd>
      <dt>JSON Web Token</dt>
      <dd>•••• {currentUser.token.substr(currentUser.token.length - 10)}</dd>
    </dl>
  );

  const header = <h3>Profile</h3>;

  return <Modal header={header}>{body}</Modal>;
};

export default Profile;
