import React, {Component} from "react";
import { Field, reduxForm } from 'redux-form';
import {Link} from "react-router"


class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.actionSubmit = this.actionSubmit.bind(this);
    }

    actionSubmit(form) {
        console.log(form);
    }

    render() {

        const { handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <form onSubmit={handleSubmit(this.actionSubmit)}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" component="input" type="text"/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" component="input" type="text"/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="text"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

// Decorate the form component
LoginForm = reduxForm({
    form: 'login' // a unique name for this form
})(LoginForm);

export default LoginForm;