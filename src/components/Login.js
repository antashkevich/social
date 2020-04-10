import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Login = (props) => {
    const onSubmit = (formData) => {

    };

    return <div className="login-block container__decor">
        <h2 className="container__title">Login form</h2>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>;
};

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit} className="form" autoComplete="off">
        <Field
            type="text"
            name="Login"
            className="form__input"
            component="input"
            placeholder="Login" />
        <Field
            type="password"
            name="Password"
            className="form__input"
            component="input"
            placeholder="Password" />
        <div className="form__footer">
            <button className="button-action">Login</button>
            <label className="form__label">
                <Field 
                    type="checkbox"
                    name="RememberMe"
                    className="form__checkbox form__checkbox_hide" 
                    component="input" />
                <span className="form__checkbox-fake">remember me</span>
            </label>
        </div>
    </form>;
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

export default Login;
