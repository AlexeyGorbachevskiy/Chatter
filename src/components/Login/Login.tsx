import React from 'react';
import style from './Login.module.css'
import {reduxForm} from "redux-form";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {ThunkDispatch} from "redux-thunk";
import {AuthReducerActionTypes, loginThunkCreator, logoutThunkCreator} from "../../redux/authReducer";
import {Redirect} from "react-router";


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


function Login(props: any) {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe)
        debugger
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>

    }

    return (
        <div className={style.login_wrapper}>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export type MapStatePropsType = {
    isAuth: boolean
}


let mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    logout: () => void
}

let mapDispatchToProps = (dispatch: ThunkDispatch<RootState, unknown, AuthReducerActionTypes>)
    : MapDispatchPropsType => {
    return {
        login: (email, password, rememberMe) => {
            dispatch(loginThunkCreator(email, password, rememberMe))
        },
        logout: () => {
            dispatch(logoutThunkCreator())
        },
    }
}


export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootState>
(mapStateToProps, mapDispatchToProps)(Login)
