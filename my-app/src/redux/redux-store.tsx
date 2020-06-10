import {createStore, combineReducers} from 'redux';
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import friendReducer from "./friendReducer";

export type PostDataArray = {
    id: number
    message: string
    like: number
}

export type ProfilePageType = {
    postData: Array<PostDataArray>
    newPostText: string
}

export type FriendsDataArray = {
    id: number
    user_name: string
    img_path: string
}

export type FriendPageType = {
    friendData: Array<FriendsDataArray>
}

export type DialogsDataArray = {
    id: number
    name: string
}
export type MessagesDataArray = {
    id: number
    messageText: string
}

export type MessagesPageType = {
    dialogsData: Array<DialogsDataArray>
    messagesData: Array<MessagesDataArray>
    newMessageBody: string
}


export type StateType = {
    profilePage: ProfilePageType
    friendPage: FriendPageType
    messagesPage: MessagesPageType
}

export type DispatchActionType = {
    type: string
    newText?: string
    body?: string
}


let reducers = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: messagesReducer,
        friendPage: friendReducer
    }
);


let store = createStore(reducers);


export default store;