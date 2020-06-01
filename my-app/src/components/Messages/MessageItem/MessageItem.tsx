import React from 'react';
import obj from '../Messages.module.css';


type MessagePropsType = {
    message: string
}

function MessageItem(props: MessagePropsType) {
    return <div className={obj.message_item}>{props.message}</div>
}


export default MessageItem;