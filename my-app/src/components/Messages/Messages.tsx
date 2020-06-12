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


type MessagesPropsType={
    store:any
}

function Messages(props: MessagesPropsType) {

    let dialogElements = props.store.getState().messagesPage.dialogsData.map((t: DialogsDataArray) => {
        return <DialogItem key={t.id} user_name={t.name} user_id={t.id}/>
    });

    return (
        <div className={obj.messages_container}>
            <div className={obj.dialogs_items}>
                    {dialogElements}
            </div>
            <div className={obj.messages_items}>
                <MessageItemContainer/>
            </div>
        </div>
    );
}





export default Messages;