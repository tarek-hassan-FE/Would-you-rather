import React from 'react';

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <div className="navbar-pages">
                    <span>Home</span>
                    <span>New Question</span>
                    <span>Leader Board</span>
                </div>
               <div className="navbar-user"></div>
            </div>
        </div>
    );
}

export default Navbar;