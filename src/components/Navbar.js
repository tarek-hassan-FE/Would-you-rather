import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from "react-router-dom";
import {SET_AUTHED_USER , setAuthedUser} from '../actions/authedUser'

function Navbar() {

    const history = useHistory();
    const location = useLocation()
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
                    <Link 
                        to='/home' 
                        className={location.pathname === '/home' ? 'active-page' : ''} >
                        Home
                    </Link>

                    <Link 
                        to='/new-question' 
                        className={location.pathname === '/new-question' ? 'active-page' : ''} >
                        New Question
                    </Link>

                    <Link 
                        to='/leader-board' 
                        className={location.pathname === '/leader-board' ? 'active-page' : ''} >
                        Leaderboard
                    </Link>

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