import React, { useState, useRef } from 'react';
import validator from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import Modal from '../Modal.jsx';

import AuthService from '../../services/auth.service';

const validRequired = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This Field is Required
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!validator.isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Must Be a Valid Email Address
      </div>
    );
  }
};

const validPassword = (value, props, components) => {
  if (value !== components['password'][0].value) {
    return (
      <div className="alert alert-danger" role="alert">
        Passwords Do Not Match
      </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [successful, setSuccessful] = useState(false);

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
  };

  const onChangeFullName = (e) => {
    const fullName = e.target.value;
    setFullName(fullName);
  };

  const onChangeDisplayName = (e) => {
    const displayName = e.target.value;
    setDisplayName(displayName);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage('');
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(email, password, fullName, displayName).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  const body = (
    <Form id="form-register" onSubmit={handleRegister} ref={form}>
      {!successful && (
        <>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Input
              type="text"
              className="form-control"
              name="email"
              value={email}
              onChange={onChangeEmail}
              validations={[validRequired, validEmail]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[validRequired]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Input
              type="password"
              className="form-control"
              name="confirmPassword"
              value={confirmPassword}
              onChange={onChangeConfirmPassword}
              validations={[validRequired, validPassword]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <Input
              type="text"
              className="form-control"
              name="fullName"
              value={fullName}
              onChange={onChangeFullName}
              validations={[validRequired]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="displayName">Display Name</label>
            <Input
              type="text"
              className="form-control"
              name="displayName"
              value={displayName}
              onChange={onChangeDisplayName}
            />
          </div>
        </>
      )}

      {message && (
        <div className="form-group">
          <div
            className={
              successful ? 'alert alert-success' : 'alert alert-danger'
            }
            role="alert"
          >
            {message}
          </div>
        </div>
      )}
      <CheckButton style={{ display: 'none' }} ref={checkBtn} />
    </Form>
  );

  const header = (
    <>
      <img
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        alt="profile-img"
        className="profile-img-card"
      />
      <h2>Register</h2>
    </>
  );

  const footer = (
    <button
      form="form-register"
      className="btn btn-primary btn-block"
      disabled={loading}
    >
      {loading && <span className="spinner-border spinner-border-sm"></span>}
      <span>log In</span>
    </button>
  );

  return (
    <Modal header={header} footer={footer}>
      {body}
    </Modal>
  );
};

export default Register;
