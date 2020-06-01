import React from 'react';
import obj from './Messages.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {AppPropsType, DialogsDataArray, MessagesDataArray} from "../../redux/state";

function Messages(props:AppPropsType) {

    let messageElements = props.messagesPage?.messagesData.map((t:MessagesDataArray) => {
        return <MessageItem message={t.message}/>
    });
    let dialogElements = props.messagesPage?.dialogsData.map((t:DialogsDataArray) => {
        return <DialogItem user_name={t.name} user_id={t.id}/>
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




export default Messages;