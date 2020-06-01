import React from 'react';
import obj from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header className={obj.header}>
                <div className={obj.wrap}>
                    <div className={`${obj.logo}`}>
                        <NavLink className={obj.logo_link} to="/profile">
                            <img className={obj.logo_img} src={'img/logo.png'} />
                        </NavLink>
                    </div>

                    <div className={obj.login}>
                        <div className={obj.item}><a>Register</a></div>
                        <div className={obj.item}><a>Log In</a></div>
                    </div>

                </div>
        </header>
    );
}


export default Header;