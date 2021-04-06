import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="container-fluid d-flex flex-wrap justify-content-center align-items-center py-3 border-bottom">
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <span className="fs-4">Trex</span>
      </Link>
      {props.currentUser ? null : (
        <ul className="nav justify-content-end nav-pill">
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/register"
            >
              Register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/log-in"
            >
              Log In
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
