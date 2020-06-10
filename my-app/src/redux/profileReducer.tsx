import {DispatchActionType, ProfilePageType} from "./redux-store";


type ProfileReducerType = (state: ProfilePageType, action: DispatchActionType) => ProfilePageType

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    postData: [
        {id: 1, message: 'Hey, how you doing?', like: 5},
        {id: 2, message: 'What\'s cooking, good looking?', like: 8},
    ],
    newPostText: ''
}

const profileReducer: ProfileReducerType = (state=initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let postDataPushItem = {
                id: 3,
                message: state.newPostText,
                like: 9,
            }
            state.postData.push(postDataPushItem);
            state.newPostText = '';
            return state
        }
        case UPDATE_NEW_POST_TEXT: {
            action.newText && (state.newPostText = action.newText);
            return state
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText});


export default profileReducer;