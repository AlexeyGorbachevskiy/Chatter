import React from 'react';
import obj from './Header.module.css';
import logo from '../../img/logo.png';

function Header() {
    return (
        <header className={obj.header}>
                <div className={obj.wrap}>
                    <div className={`${obj.logo}`}>
                        <a className={obj.logo_link} href="#">
                            <img className={obj.logo_img} src={logo} />
                        </a>
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