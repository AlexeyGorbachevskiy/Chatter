import React from 'react';
import obj from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {DialogsDataArray, DispatchActionType, MessagesPageType} from "../../redux/redux-store";



type MessagesPropsType={
    messagesPage:MessagesPageType
    dispatch: (action:DispatchActionType)=>void
}

function Messages(props: MessagesPropsType) {

    let dialogElements = props.messagesPage.dialogsData.map((t: DialogsDataArray) => {
        return <DialogItem user_name={t.name} user_id={t.id}/>
    });

    return (
        <div className={obj.messages_container}>
            <div className={obj.dialogs_items}>
                    {dialogElements}
            </div>
            <div className={obj.messages_items}>
                <MessageItem messagesPage={props.messagesPage} dispatch={props.dispatch}/>
            </div>
        </div>
    );
}


export default Messages;