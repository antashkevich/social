import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item">
        <NavLink className="nav__link" activeClassName={"nav__link_active"} exact to="/">Profile</NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" activeClassName={"nav__link_active"} to="/dialogs">Messages</NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" activeClassName={"nav__link_active"} to="/users">Users</NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" activeClassName={"nav__link_active"} to="/news">News</NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" activeClassName={"nav__link_active"} to="/music">Music</NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" activeClassName={"nav__link_active"} to="/settings">Settings</NavLink>
      </li>
    </ul>
  </nav>;
}

export default Navbar;
