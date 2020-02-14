import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const NavBar = ({ classes }) => {
    return (
        <nav>
        <NavLink to="/feed" activeClassName="selected">
            <img src={'/images/logo/logo.svg'} height="100px" width="100px" alt="logo"/>
            Feed</NavLink>
        <NavLink to="/archive" activeClassName="selected">Archive</NavLink>
        <NavLink to="/account" activeClassName="selected">Account</NavLink>
        <NavLink to="/signup" activeClassName="selected">SignUp</NavLink>
        <NavLink to="/single" activeClassName="selected">Single</NavLink>
    </nav>
      ) 
}


export default withRouter(NavBar);