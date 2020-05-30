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

export type ProfilePagePropsType={
    postData?: Array<PostDataArray>
}

export type MessagesPagePropsType={
    messagesData: Array<MessagesDataArray>
    dialogsData: Array<DialogsDataArray>
}

export type AppPropsType= {
    profilePage?:ProfilePagePropsType
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