import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import AuthService from '../../services/auth.service';

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const handleLogOut = () => {
    AuthService.logOut();
  };
  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${isOpen && 'is-active'}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </div>
      <div className={`navbar-menu ${isOpen && 'is-active'}`}>
        <div className="navbar-start">
          <NavLink
            exact
            className="navbar-link"
            activeClassName="is-active"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            exact
            className="navbar-link"
            activeClassName="is-active"
            to="/register"
          >
            Register
          </NavLink>
          <NavLink
            exact
            className="navbar-link"
            activeClassName="is-active"
            to="/log-in"
          >
            Log In
          </NavLink>
          <NavLink
            exact
            className="navbar-link"
            activeClassName="is-active"
            to="/log-out"
            onClick={handleLogOut}
          >
            Log Out
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export { Navigation };
