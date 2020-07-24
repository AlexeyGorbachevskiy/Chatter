import {authAPI} from "../API/API";
import {RootState} from "./redux-store";
import {ThunkAction} from "redux-thunk";
import {stopSubmit} from "redux-form";

type initialStateType = typeof initialState


let initialState = {
    data: {
        email: null as string | null,
        id: null as number | null,
        login: null as string | null,
    },
    isAuth: false,
}

export type AuthReducerActionTypes = SetAuthUserDataACType
const authReducer = (state: initialStateType = initialState, action: AuthReducerActionTypes): initialStateType => {

    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                data: {...action.userData!},
                isAuth: action.isAuth,
            }
        }

        default:
            return state
    }
}


export type UserDataType = {
    email: string | null,
    id: number | null,
    login: string | null,
} | null
type SetAuthUserDataACType = {
    type: typeof SET_AUTH_USER_DATA
    userData: UserDataType
    isAuth: boolean
}
const SET_AUTH_USER_DATA = 'SET_USER_DATA';


export const setAuthUserDataAC = (userData: UserDataType, isAuth: boolean): SetAuthUserDataACType => ({
    type: SET_AUTH_USER_DATA,
    userData,
    isAuth
});


export const getAuthInfoThunkCreator = (): ThunkAction<void, RootState, unknown, AuthReducerActionTypes> => {
    return (
        (dispatch, getState) => {
            authAPI.getAuthInfo()
                .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(setAuthUserDataAC(response.data.data, true));
                    }
                })
        }
    )
};


//TODO --- AuthReducerActionTypes instead any
export const loginThunkCreator = (email: string, password: string, rememberMe: boolean): ThunkAction<void, RootState, unknown, any> => {
    return (
        (dispatch, getState) => {
            authAPI.login(email, password, rememberMe)
                .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(getAuthInfoThunkCreator())
                    } else {
                        const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                        const action = stopSubmit('login', {_error: message});
                        dispatch(action);
                    }
                })
        }
    )
};

export const logoutThunkCreator = (): ThunkAction<void, RootState, unknown, AuthReducerActionTypes> => {
    return (
        (dispatch, getState) => {
            authAPI.logout()
                .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(setAuthUserDataAC(null, false));
                    }
                })
        }
    )
};


export default authReducer;