import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';

import withAuthorization from './withAuthorization';
import { db } from '../firebase';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: null,
        };
    }

    componentDidMount() {
        const { userStore } = this.props;

        db.onceGetUsers().then(snapshot =>
            userStore.setUsers(snapshot.val())
        );
    }

    render() {
        const { users } = this.props.userStore;
        return (
            <div>
                <h1>Home</h1>
                <p>The Home Page is accessible by every signed in user.</p>
                { !!users && <UserList users={users} /> }
            </div>
        );
    }
}

const UserList = ({ users }) =>
    <div>
        <h2>List of Usernames of Users</h2>
        <p>(Saved on Sign Up in Firebase Database)</p>

        {Object.keys(users).map(key =>
            <div key={key}>{users[key].username}</div>
        )}
    </div>

const mapStateToProps = (state) => ({
    users: state.userState.users,
});

const mapDispatchToProps = (dispatch) => ({
    onSetUsers: (users) => dispatch({ type: 'USERS_SET', users }),
});

const authCondition = (authUser) => !!authUser;

export default compose(
    withAuthorization(authCondition),
    inject('userStore'),
    observer
)(HomePage);