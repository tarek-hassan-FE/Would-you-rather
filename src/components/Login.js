import React from 'react';
import Navbar from './Navbar';

function Login() {
    return (
        <div className="login-page-container">
            <Navbar />
            <div className="login-card-container">
                <div className="login-card">
                    <div className="welcome-message">
                        <p><b>Welcome to the Would You Rather App!</b></p>
                        <p>Please sign in to continue</p>
                    </div>
                   <div className="login-page-image">
                        <img src="https://equimper.gallerycdn.vsassets.io/extensions/equimper/react-native-react-redux/2.0.6/1602247317454/Microsoft.VisualStudio.Services.Icons.Default" alt="" />
                   </div>
                    <div className="login-form">
                        <form>
                            <label> Sign in</label>
                            <select defaultValue = "" >
                                <option value="" disabled>Select User</option>
                                <option value="user1">User 1</option>
                            </select>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;