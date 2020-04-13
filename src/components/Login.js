import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../utils/validators/validators';
import { renderField } from './common/FormsControls/FormsControls';

const Login = (props) => {
    const onSubmit = (formData) => {

    };

    return <div className="login-block container__decor">
        <h2 className="container__title">Login form</h2>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>;
};

const maxLength10 = maxLengthCreator(10);
const maxLength20 = maxLengthCreator(20);

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit} className="form" autoComplete="off">
        <Field
            type="text"
            name="Login"
            className="form__input"
            component={renderField}
            placeholder="Login"
            validate={[required, maxLength20]} />
        <Field
            type="password"
            name="Password"
            className="form__input"
            component={renderField}
            placeholder="Password"
            validate={[required, maxLength10]} />
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
