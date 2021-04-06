import React, { useState, useRef } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import Modal from '../Modal';

import AuthService from '../../services/auth.service';

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const logIn = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handlelogIn = (e) => {
    e.preventDefault();

    setMessage('');
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.logIn(email, password).then(
        () => {
          props.history.push('/');
          window.location.reload();
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
    <Form id="form-login" onSubmit={handlelogIn} ref={form}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <Input
          type="text"
          className="form-control"
          name="email"
          value={email}
          onChange={onChangeEmail}
          validations={[required]}
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
          validations={[required]}
        />
      </div>

      {message && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
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
      <h2>Log In</h2>
    </>
  );

  const footer = (
    <button
      form="form-login"
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

export default logIn;
