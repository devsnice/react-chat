import React, {Component} from "react";
import {Link} from "react-router"

// import components
import LoginForm from './components/loginForm/loginForm.jsx'

class Auth extends Component {


    render() {
        return (
            <div>
                <h4>
                    Auth on website
                </h4>

                <LoginForm />
            </div>
        )
    }
}

export default Auth