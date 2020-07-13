import React from 'react';
import style from './Login.module.css'
import {reduxForm} from "redux-form";
import LoginForm from "./LoginForm";


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


function Login() {
    const onSubmit=(formData:any)=>{

    }
    return (
        <div className={style.login_wrapper}>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


export default Login