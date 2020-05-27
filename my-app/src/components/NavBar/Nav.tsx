import React from 'react';
import obj from './Nav.module.css';
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <nav className={obj.nav}>
            <div className={obj.item}><NavLink to="/profile" activeClassName={obj.activeLink} className={obj.link}>Profile</NavLink></div>
            <div className={obj.item}><NavLink to="/messages" activeClassName={obj.activeLink} className={obj.link}>Messages</NavLink></div>
            <div className={obj.item}><NavLink to="/news" activeClassName={obj.activeLink} className={obj.link}>News</NavLink></div>
            <div className={obj.item}><NavLink to="/music" activeClassName={obj.activeLink} className={obj.link}>Music</NavLink></div>
            <div className={obj.item}><NavLink to="/settings" activeClassName={obj.activeLink} className={obj.link}>Settings</NavLink></div>
        </nav>
    );
}


export default Nav;