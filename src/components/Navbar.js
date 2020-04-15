import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faComments, faNewspaper, faUsers, faMusic, faCog, faImage } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item">
        <NavLink className="nav__link" activeClassName={"nav__link_active"} to="/profile">
          <FontAwesomeIcon icon={faHome} />
          Profile
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" activeClassName={"nav__link_active"} to="/dialogs">
          <FontAwesomeIcon icon={faComments} />
          Messages
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" activeClassName={"nav__link_active"} to="/users">
          <FontAwesomeIcon icon={faUsers} />
          Users
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" activeClassName={"nav__link_active"} to="/photos">
          <FontAwesomeIcon icon={faImage} />
          Photos
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" activeClassName={"nav__link_active"} to="/news">
          <FontAwesomeIcon icon={faNewspaper} />
          News
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" activeClassName={"nav__link_active"} to="/music">
          <FontAwesomeIcon icon={faMusic} />
          Music
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" activeClassName={"nav__link_active"} to="/settings">
          <FontAwesomeIcon icon={faCog} />
          Settings
        </NavLink>
      </li>
    </ul>
  </nav>;
}

export default Navbar;
