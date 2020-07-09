import {profileAPI} from "../API/API";
import {RootState} from "./redux-store";
import {ThunkAction} from "redux-thunk";
import {AuthReducerActionTypes} from "./authReducer";

type initialStateType = typeof initialState


export type PostDataArray = {
    id: number
    message: string
    like: number
}
export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    aboutMe: string,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: PhotosType
}

let initialState = {
    postData: [
        {id: 1, message: 'Hey, how you doing?', like: 5},
        {id: 2, message: 'What\'s cooking, good looking?', like: 8},
    ] as Array<PostDataArray>,
    newPostText: '' as string,
    profile: null as ProfileType | null,
}

export type ProfileReducerActionTypes = addPostACType | updateNewPostTextACType | setUserProfileACType

const profileReducer = (state: initialStateType = initialState, action: ProfileReducerActionTypes): initialStateType => {

    switch (action.type) {
        case ADD_POST: {
            let postDataPushItem = {
                id: 3,
                message: state.newPostText,
                like: 9,
            }
            return {
                ...state,
                postData: [postDataPushItem, ...state.postData],
                newPostText: '',
            };

        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            };
        }
        default:
            return state
    }
}

export type addPostACType = {
    type: typeof ADD_POST

}
export type updateNewPostTextACType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}
export type setUserProfileACType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const addPostActionCreator = (): addPostACType => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newText: string): updateNewPostTextACType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText
});
export const setUserProfileAC = (profile: ProfileType): setUserProfileACType => ({type: SET_USER_PROFILE, profile})

export const getProfileInfoThunkCreator = (userId: string)
    :ThunkAction<void, RootState, unknown,ProfileReducerActionTypes>=> {
    return (
        (dispatch,getState) => {
            profileAPI.getProfileInfo(userId)
                .then(response => {
                    dispatch(setUserProfileAC(response.data));
                })
        }
    )
}

export default profileReducer;