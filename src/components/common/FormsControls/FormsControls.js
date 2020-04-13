import React from 'react';

export const Input = ({input, meta, ...props}) => {
    return <div>
        <input {...input} {...props} />
    </div>;
};

export const renderField = ({
    input,
    label,
    type,
    meta: { touched, error },
    ...props
  }) => {
    return <div className="create-post__container">
    <input {...input} type={type} {...props} />
    {touched && (error && <div className="error-popup"><span>{error}</span></div>)}
    </div>
  }
  
