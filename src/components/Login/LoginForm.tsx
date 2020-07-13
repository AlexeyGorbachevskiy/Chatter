import style from "./Login.module.css";
import React from "react";
import {Field} from "redux-form";



function LoginForm(props: any) {
    return (
        <form className={style.form} onSubmit={props.handleSubmit}>

            <h1 className={style.form_header}>Log In</h1>

            <div className={style.fields}>
                <div>
                    <Field name={'login'} className={style.login_input} placeholder='Login' component={'input'}
                           type="text"/>
                </div>
                <div>
                    <Field name={'password'} className={style.password_input} placeholder='Password' component={'input'}
                           type="password"/>
                </div>
                <div className={style.remember}>
                    <Field name={'remember'} component={'input'} type="checkbox"/>
                    <> Remember</>
                </div>
            </div>

            <div className={style.login_btn_wrapper}>
                <button className={style.login_btn}>Log In</button>
            </div>
        </form>
    )
}

export default LoginForm;