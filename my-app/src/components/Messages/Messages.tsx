import React from 'react';
import obj from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItemContainer from "./MessageItem/MessageItemContainer";

export type DialogsDataArray = {
    id: number
    name: string
}

export type MessagesDataArray = {
    id: number
    messageText: string
}


type MessagesPropsType = {
    dialogElements: JSX.Element[]
}

function Messages(props: MessagesPropsType) {

    return (
        <div className={obj.messages_container}>
            <div className={obj.dialogs_items}>
                {props.dialogElements}
            </div>
            <div className={obj.messages_items}>
                <MessageItemContainer/>
            </div>
        </div>
    );
}


export default Messages;