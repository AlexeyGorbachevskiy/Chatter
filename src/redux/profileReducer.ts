import {profileAPI} from "../API/API";
import {RootState} from "./redux-store";
import {ThunkAction} from "redux-thunk";

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
    small: string | null
    large: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

let initialState = {
    postData: [
        {id: 1, message: 'Hey, how you doing?', like: 5},
        {id: 2, message: 'What\'s cooking, good looking?', like: 8},
    ] as Array<PostDataArray>,
    newPostText: '' as string,
    profile: null as ProfileType | null,
    status: '' as string
}

export type ProfileReducerActionTypes =
    AddPostACType | UpdateNewPostTextACType | SetUserProfileACType | SetStatusACType

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

        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        default:
            return state
    }
}

export type AddPostACType = {
    type: typeof ADD_POST

}
export type UpdateNewPostTextACType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}
export type SetUserProfileACType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}
export type SetStatusACType = {
    type: typeof SET_STATUS,
    status: string
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
export const addPostActionCreator = (): AddPostACType => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextACType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText
});
export const setUserProfileAC = (profile: ProfileType): SetUserProfileACType => ({type: SET_USER_PROFILE, profile});

export const getProfileInfoThunkCreator = (userId: string)
    : ThunkAction<void, RootState, unknown, ProfileReducerActionTypes> => {
    return (
        (dispatch, getState) => {
            profileAPI.getProfileInfo(userId)
                .then(response => {
                    dispatch(setUserProfileAC(response.data));
                })
        }
    )
}

export const setStatusAC = (status: string): SetStatusACType => ({type: SET_STATUS, status});

export const getStatusThunkCreator = (userId: number)
    : ThunkAction<void, RootState, unknown, ProfileReducerActionTypes> => {
    return (
        (dispatch, getState) => {
            profileAPI.getStatus(userId)
                .then(response => {
                    dispatch(setStatusAC(response.data))
                })
        }
    )
}
export const updateStatusThunkCreator = (status: string)
    : ThunkAction<void, RootState, unknown, ProfileReducerActionTypes> => {
    return (
        (dispatch, getState) => {
            profileAPI.updateStatus(status)
                .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(setStatusAC(status))
                    }
                })
        }
    )
}

export default profileReducer;