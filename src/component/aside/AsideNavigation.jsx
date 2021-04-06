import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthService from '../../services/auth.service';
import { House, BoxArrowRight } from 'react-bootstrap-icons';

const handleLogOut = () => {
  AuthService.logOut();
};
const AsideNavigation = () => {
  return (
    <nav className="nav nav-pills flex-column mb-auto">
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink
            exact
            activeClassName="active"
            className="nav-link link-dark"
            to="/"
          >
            <House className="m-1" />
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            hoverClassName="danger"
            activeClassName="active"
            className="nav-link link-dark"
            to="/log-out"
            onClick={handleLogOut}
          >
            <BoxArrowRight className="m-1" />
            Log Out
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { AsideNavigation };
