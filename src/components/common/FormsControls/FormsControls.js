import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Input = ({input, meta, ...props}) => {
    return <div>
        <input {...input} {...props} />
    </div>;
};

export const RenderField = ({
    input,
    label,
    type,
    meta: { touched, error },
    iconFlip,
    typeShow,
    ...props
  }) => {
    const [hide, setIcon] = useState(true);

    let changeIcon = () => {
        setIcon(!hide);
    };

    return <div className="form__input-container">
        <input {...input} type={hide ? type : typeShow} {...props} />
        {touched && (error && <div className="error-popup"><span>{error}</span></div>)}
        {props.icon && <FontAwesomeIcon className="form__pass-icon" icon={hide ? props.icon : iconFlip} onClick={() => changeIcon()} /> }
    </div>
  }
    