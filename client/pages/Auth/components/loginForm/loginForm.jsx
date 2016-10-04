import React, {Component} from "react";
import { Field, reduxForm } from 'redux-form';
import {Link} from "react-router"


class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log(e);
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
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