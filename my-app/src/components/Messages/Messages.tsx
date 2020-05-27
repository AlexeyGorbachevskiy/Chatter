import React from 'react';
import obj from './Messages.module.css';
import {NavLink} from "react-router-dom";


function Messages() {

    let dialogsData = [
        {id: 1, name: "Alex"},
        {id: 2, name: "Olga"},
        {id: 3, name: "Boris"}
    ];
    let messagesData = [
        {id: 1, message: "Hello, how are you?"},
        {id: 2, message: "I am okay. How are you?"},
        {id: 3, message: "What's your favorite programming language?"}
    ];

    let messageElements = messagesData.map((t) => {
        return <Message_item message={t.message}/>
    });
    let dialogElements = dialogsData.map((t) => {
        return <Dialog_item user_name={t.name} user_id={t.id}/>
    });

    return (
        <div className={obj.messages_container}>
            <div className={obj.dialogs_items}>
                {dialogElements}
            </div>
            <div className={obj.messages_items}>
                {messageElements}
            </div>
        </div>
    );
}


type DialogPropsType = {
    user_name: string,
    user_id: number
}

function Dialog_item(props: DialogPropsType) {
    let path = "/messages/" + props.user_id;
    return <div className={obj.dialog_item + ' ' + obj.active}>
        <NavLink to={path}>{props.user_name}</NavLink>
    </div>
}


type MessagePropsType = {
    message: string
}

function Message_item(props: MessagePropsType) {
    return <div className={obj.message_item}>{props.message}</div>
}


export default Messages;