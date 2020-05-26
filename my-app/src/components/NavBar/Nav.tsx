import React from 'react';
import obj from './Nav.module.css';

function Nav() {
    return (
        <nav className={obj.nav}>
            <div className={obj.item}><a className={obj.link}>Profile</a></div>
            <div className={obj.item}><a className={obj.link}>Messages</a></div>
            <div className={obj.item}><a className={obj.link}>News</a></div>
            <div className={obj.item}><a className={obj.link}>Music</a></div>
            <div className={obj.item}><a className={obj.link}>Settings</a></div>
        </nav>
    );
}


export default Nav;