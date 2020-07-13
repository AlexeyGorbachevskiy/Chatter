import {authAPI} from "../API/API";
import {RootState} from "./redux-store";
import {ThunkAction} from "redux-thunk";

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
                data: {...action.userData},
                isAuth: true,
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
}
type SetAuthUserDataACType = {
    type: typeof SET_AUTH_USER_DATA
    userData: UserDataType
}
const SET_AUTH_USER_DATA = 'SET_USER_DATA';


export const setAuthUserDataAC = (userData: UserDataType): SetAuthUserDataACType => ({
    type: SET_AUTH_USER_DATA,
    userData
});


export const getAuthInfoThunkCreator = (): ThunkAction<void, RootState, unknown, AuthReducerActionTypes> => {
    return (
        (dispatch,getState) => {
            authAPI.getAuthInfo()
                .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(setAuthUserDataAC(response.data.data));
                    }
                })
        }
    )
};


export default authReducer;