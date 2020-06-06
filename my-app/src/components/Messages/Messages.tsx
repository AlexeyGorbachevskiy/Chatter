import React from 'react';
import obj from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {DialogsDataArray, MessagesPageType} from '../../redux/state';


type MessagesPropsType={
    messagesPage:MessagesPageType
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
                <MessageItem/>
            </div>
        </div>
    );
}


export default Messages;