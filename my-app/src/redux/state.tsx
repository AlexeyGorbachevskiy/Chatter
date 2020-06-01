import React from "react";


export type PostDataArray = {
    id: number
    message: string
    like: number
}

export type DialogsDataArray = {
    id: number
    name: string
}

export type MessagesDataArray = {
    id: number
    message: string
}

export type ProfilePagePropsType = {
    postData?: Array<PostDataArray>
}

export type MessagesPagePropsType = {
    messagesData: Array<MessagesDataArray>
    dialogsData: Array<DialogsDataArray>
}

export type FriendsDataArray = {
    id?: number
    user_name: string
    img_path: string
}
export type FriendPagePropsType = {
    friendData: Array<FriendsDataArray>
}

export type AppPropsType = {
    profilePage?: ProfilePagePropsType
    friendPage?: FriendPagePropsType
    messagesPage?: MessagesPagePropsType
}

export type StatePropsType = {
    state: AppPropsType
}


let state = {
    profilePage: {
        postData: [
            {id: 1, message: "Hey, how you doing?", like: 5},
            {id: 2, message: "What's cooking, good looking?", like: 8}
        ]
    },
    friendPage: {
        friendData: [
            {id: 2, user_name: 'Jeff Bezos', img_path: 'Bezos.png'},
            {id: 3, user_name: 'Elon Musk', img_path: 'Musk.png'},
            {id: 4, user_name: 'Jordan Peterson', img_path: 'Peterson.webp'},
            {id: 5, user_name: 'Mark Zuckerberg', img_path: 'Zuckerberg.png'},
            {id: 6, user_name: 'Michael  Jordan', img_path: 'Jordan.png'}
        ]
    },

    messagesPage: {
        messagesData: [
            {id: 1, message: "Hello, how are you?"},
            {id: 2, message: "I am okay. How are you?"},
            {id: 3, message: "What's your favorite programming language?"}
        ],
        dialogsData: [
            {id: 1, name: "Alex"},
            {id: 2, name: "Olga"},
            {id: 3, name: "Boris"}
        ]
    }

}

export default state;