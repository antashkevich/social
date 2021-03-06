import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return <div className="dialogs__item">
    <NavLink to={path} className="dialogs__person">{props.name}</NavLink>
  </div>;
};

export default DialogItem;
