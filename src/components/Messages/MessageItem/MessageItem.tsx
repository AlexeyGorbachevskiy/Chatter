import React, {ChangeEvent} from 'react';
import obj from './MessageItem.module.css';
import YourMessage from './YourMessage/YourMessage';
import NotYourMessage from './NotYourMessage/NotYourMessage';
import {DialogsDataArray, MessagesDataArray} from "../../../redux/messagesItemReducer";

export type MessagesPageType = {
    dialogsData: Array<DialogsDataArray>
    messagesData: Array<MessagesDataArray>
    newMessageBody: string
}

type MessageItemPropsType = {
    messagesPage: MessagesPageType
    sendMessageClick: () => void
    changeTextArea: (currentValue: string) => void
}

function MessageItem(props: MessageItemPropsType) {

    const onSendMessageClickHandler = () => props.sendMessageClick();
    const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let currentValue = e.currentTarget.value;
        props.changeTextArea(currentValue);
    }
    return (
        <div className={obj.message_side_container}>
            <div className={obj.message_item}>
                <NotYourMessage/>
                <YourMessage messagesPage={props.messagesPage}/>
            </div>
            <div className={obj.input_container}>
                <textarea onChange={onChangeTextAreaHandler} value={props.messagesPage.newMessageBody} wrap={'off'}
                          className={obj.input}
                          placeholder={'Write a message...'}/>
                <button onClick={onSendMessageClickHandler} className={obj.send_btn}> Send</button>
            </div>
        </div>
    )
}


export default MessageItem;