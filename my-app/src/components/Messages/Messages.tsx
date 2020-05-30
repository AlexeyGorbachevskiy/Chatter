import React from 'react';
import obj from './Messages.module.css';
import Dialog_item from "./Dialog_Item/Dialog_Item";
import Message_item from "./Message_Item/Message_item";
import {AppPropsType, DialogsDataArray, MessagesDataArray} from "../../redux/state";

function Messages(props:AppPropsType) {

    let messageElements = props.messagesPage?.messagesData.map((t:MessagesDataArray) => {
        return <Message_item message={t.message}/>
    });
    let dialogElements = props.messagesPage?.dialogsData.map((t:DialogsDataArray) => {
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




export default Messages;