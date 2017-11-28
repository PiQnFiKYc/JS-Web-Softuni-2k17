import React from 'react';

let Header = (props) =>{
    return (
        <header>
            <span className="logo">☃</span><span className="header">SeenIt</span>
            <div id="profile"><span>pesho</span>|<a href="#/logout">logout</a></div>
        </header>
    )
}

export default Header;