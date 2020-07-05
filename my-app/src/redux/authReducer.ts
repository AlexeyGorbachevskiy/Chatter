type initialStateType = typeof initialState


let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
}

export type AuthReducerActionTypes = SetAuthUserDataACType
const authReducer = (state: initialStateType = initialState, action: AuthReducerActionTypes): initialStateType => {

    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.userData,
                isAuth: true,
            }
        }

        default:
            return state
    }
}


export type UserDataType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth:boolean,
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


export default authReducer;