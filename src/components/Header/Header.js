import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return <header className="header">
    <div className="container">
      <img className="header__logo" src="/assets/media/logo.png" alt='' />
      { props.isAuth
        ?
        <NavLink to={"./"}>{props.login}</NavLink>
        :
        <NavLink to={"/login"}>Login</NavLink>
      }
    </div>
  </header>;
}

export default Header;
