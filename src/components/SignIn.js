import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import {SignUpLink} from "./signup/SignUp";
import {PasswordForgetLink} from './PasswordForget';
import {auth} from "../firebase";
import * as routes from '../constants/routes';

const SignInPage = ({history}) =>
    <div id="login">
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className={"login-middle"}>
                    <div className="login-box col-md-12">
                        <SignInForm history={history}/>
                        <div className="form-group">
                        <PasswordForgetLink/>
                        <SignUpLink/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value
});


const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = (event) => {
        const {
            email,
            password
        } = this.state;

        const {
            history,
        } = this.props;

        auth.doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({...INITIAL_STATE});
                history.push(routes.HOME);
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });
        event.preventDefault();
    }

    render() {
        const {
            email,
            password,
            error,
        } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <form onSubmit={this.onSubmit} className="form">
                <h3 className="text-center text-info">Login</h3>
                <div className="form-group">
                    <label htmlFor="email" className="text-info">Email:</label><br/>
                    <input
                        value={email}
                        onChange={event => this.setState(byPropKey('email', event.target.value))}
                        type={"email"}
                        placeholder={"Email Address"}
                        className={"form-control"}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="text-info">Password:</label><br/>
                    <input
                        value={password}
                        onChange={event => this.setState(byPropKey('password', event.target.value))}
                        type={"password"}
                        placeholder={"Password"}
                        className={"form-control"}
                    />
                </div>
                <div className="form-group">
                    <button disabled={isInvalid} type={"submit"} className="btn btn-info btn-md">Sign In</button>
                </div>
                {error && <p>{error.message}</p>}
            </form>
        )
    }
}

export default withRouter(SignInPage);

export {
    SignInForm,
};