import React from 'react';
import {inject, observer} from 'mobx-react';
import {compose} from 'recompose';
import {Link} from 'react-router-dom';

import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

const Navigation = ({sessionStore}) =>
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                {/*<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"*/}
                        {/*aria-expanded="false" aria-controls="navbar">*/}
                    {/*<span className="sr-only">Toggle navigation</span>*/}
                    {/*<span className="icon-bar"></span>*/}
                    {/*<span className="icon-bar"></span>*/}
                    {/*<span className="icon-bar"></span>*/}
                {/*</button>*/}
                <a className="navbar-brand" href="/">Project name</a>
            </div>
            {sessionStore.authUser
                ? <NavigationAuth/>
                : <NavigationNonAuth/>
            }
        </div>
    </nav>

const NavigationAuth = () =>
    <div id="navbar" className="navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
            <li><Link to={routes.LANDING}>Landing</Link></li>
            <li><Link to={routes.HOME}>Home</Link></li>
            <li><Link to={routes.ACCOUNT}>Account</Link></li>
            <li><SignOutButton/></li>
        </ul>
    </div>
const NavigationNonAuth = () =>
    <div id="navbar" className="navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
            <li><Link to={routes.LANDING}>Landing</Link></li>
            <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
        </ul>
    </div>

export default compose(
    inject('sessionStore'),
    observer
)(Navigation);