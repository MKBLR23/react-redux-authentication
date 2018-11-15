import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import './style.css';

import {auth, db} from '../../firebase';
import * as routes from '../../constants/routes';

const SignUpPage = ({history}) =>
    <div className="row main">
        <div className="main-login main-center">
            <h5>Sign up</h5>
            <SignUpForm history={history}/>
        </div>
    </div>

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = (event) => {
        const {
            username,
            email,
            passwordOne,
        } = this.state;

        const {
            history,

        } = this.props

        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in your own accessible Firebase Database too
                db.doCreateUser(authUser.user.uid, username, email)
                    .then(() => {
                        this.setState({...INITIAL_STATE});
                        history.push(routes.HOME);
                    })
                    .catch(error => {
                        this.setState(byPropKey('error', error));
                    });
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });
        event.preventDefault();
    }

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === ''

        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="username" className="cols-sm-2 control-label">Full Name</label>
                    <div className="cols-sm-10">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-user fa"
                                                                   aria-hidden="true"></i></span>
                            <input
                                value={username}
                                onChange={event => this.setState(byPropKey('username', event.target.value))}
                                type={"text"}
                                placeholder={"Full Name"}
                                className={"form-control"}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="cols-sm-2 control-label">Email Address</label>
                    <div className="cols-sm-10">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-envelope"
                                                                   aria-hidden="true"></i></span>
                            <input
                                value={email}
                                onChange={event => this.setState(byPropKey('email', event.target.value))}
                                type="email"
                                placeholder="Email Address"
                                className={"form-control"}
                            />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="passwordOne" className="cols-sm-2 control-label">Password</label>
                    <div className="cols-sm-10">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                            <input
                                value={passwordOne}
                                onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                                type="password"
                                placeholder="Password"
                                className={"form-control"}
                            />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="passwordTwo" className="cols-sm-2 control-label">Confirm Password</label>
                    <div className="cols-sm-10">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                            <input
                                value={passwordTwo}
                                onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                                type="password"
                                placeholder="Confirm Password"
                                className={"form-control"}
                            />
                        </div>
                    </div>
                </div>

                <div className="form-group ">
                <button disabled={isInvalid} type="submit" className={"btn btn-primary btn-lg btn-block login-button"}>
                    Sign Up
                </button>
                </div>
                <div className="form-group ">
                {error && <p>{error.message}</p>}
                </div>
            </form>
        )
    }
}

const SignUpLink = () =>
    <div id="register-link" className="text-left">
        Don't have account?
        {' '}
        <Link to={routes.SIGN_UP}>Sign Up</Link>
    </div>

export default withRouter(SignUpPage);

export {
    SignUpForm,
    SignUpLink,
};