import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import {SET_AUTHED_USER , setAuthedUser} from '../actions/authedUser'

function Navbar() {

    const history = useHistory();
    const authedUser = useSelector(state => state.authedUser);
    const users = useSelector(state => state.users);
    const user = users[authedUser.id];
    const dispatch = useDispatch()
    const handleLogout = (e) => {
        dispatch(setAuthedUser({
            type: SET_AUTHED_USER,
            id: 'guest'
        }))
        history.replace('/')
    }

    return (
        <div className="navbar-container">
            <div className="navbar">
                <div className="navbar-pages">
                    <Link to='/home' >Home</Link>
                    <Link to='new-questions' >New Question</Link>
                    <Link to='leader-board' >Leader Board</Link>
                </div>
               {
                   user &&
                   (<div className="navbar-user">
                        <span>Hello, {user.name}</span>
                        <img src={user.avatarURL} alt='avatar' />
                        <button onClick={e => handleLogout(e)}>Logout</button>
                    </div>
                    )
               }
            </div>
        </div>
    );
}

export default Navbar;