

type initialStateType = typeof initialState

export type PostDataArray = {
    id: number
    message: string
    like: number
}

let initialState = {
    postData: [
        {id: 1, message: 'Hey, how you doing?', like: 5},
        {id: 2, message: 'What\'s cooking, good looking?', like: 8},
    ] as Array<PostDataArray>,
    newPostText: '' as string
}

export type ProfileReducerActionTypes = addPostActionCreatorType | updateNewPostTextActionCreator

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
        default:
            return state
    }
}

export type addPostActionCreatorType = {
    type: typeof ADD_POST

}
export type updateNewPostTextActionCreator = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const addPostActionCreator = (): addPostActionCreatorType => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newText: string): updateNewPostTextActionCreator => ({
    type: UPDATE_NEW_POST_TEXT,
    newText
});


export default profileReducer;