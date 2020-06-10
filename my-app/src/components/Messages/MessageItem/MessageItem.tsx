import React from 'react';
import obj from './MessageItem.module.css';
import YourMessage from './YourMessage/YourMessage';
import NotYourMessage from './NotYourMessage/NotYourMessage';
import {DispatchActionType, MessagesPageType} from "../../../redux/redux-store";
import {sendMessageBodyActionCreator, updateNewMessageBodyActionCreator} from "../../../redux/messagesReducer";


type MessageItemPropsType = {
    messagesPage: MessagesPageType
    dispatch: (action: DispatchActionType) => void
}

function MessageItem(props: MessageItemPropsType) {

    const onSendMessageClickHandler = () => props.dispatch(sendMessageBodyActionCreator());
    return (
        <div className={obj.message_side_container}>
            <div className={obj.message_item}>
                <NotYourMessage/>
                <YourMessage messagesPage={props.messagesPage}/>
            </div>
            <div className={obj.input_container}>
                <textarea onChange={(e) => {
                    props.dispatch(updateNewMessageBodyActionCreator(e.currentTarget.value))
                }} value={props.messagesPage.newMessageBody} wrap={'off'} className={obj.input}
                          placeholder={'Write a message...'}/>
                <button onClick={onSendMessageClickHandler} className={obj.send_btn}> Send</button>
            </div>
        </div>
    )
}


export default MessageItem;