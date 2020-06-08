import React from 'react';


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

export type MessagesPageType = {
    dialogsData: Array<DialogsDataArray>
}


export type StateType = {
    profilePage: ProfilePageType
    friendPage: FriendPageType
    messagesPage: MessagesPageType
}

export type DispatchActionType = {
    type: string
    newText?: string
}

export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => any
    subscribe: (observer: () => void) => void
    dispatch: (action: DispatchActionType) => void
}


let store: StoreType = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hey, how you doing?', like: 5},
                {id: 2, message: 'What\'s cooking, good looking?', like: 8},
            ],
            newPostText: ''
        },
        friendPage: {
            friendData: [
                {id: 1, user_name: 'Jeff Bezos', img_path: 'Bezos.png'},
                {id: 2, user_name: 'Elon Musk', img_path: 'Musk.png'},
                {id: 3, user_name: 'Jordan Peterson', img_path: 'Peterson.webp'},
                {id: 4, user_name: 'Mark Zuckerberg', img_path: 'Zuckerberg.png'},
                {id: 5, user_name: 'Michael  Jordan', img_path: 'Jordan.png'}
            ]
        },

        messagesPage: {
            dialogsData: [
                {id: 1, name: 'Jeff Bezos'},
                {id: 2, name: 'Elon Musk'},
                {id: 3, name: 'Jordan Peterson'},

            ]
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {    // observer
        this._callSubscriber = observer;                // override
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let postDataPushItem = {
                id: 3,
                message: this._state.profilePage.newPostText,
                like: 9,
            }
            this._state.profilePage.postData.push(postDataPushItem);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            action.newText && (this._state.profilePage.newPostText  = action.newText);
            this._callSubscriber();
        }
    },
}


export default store;