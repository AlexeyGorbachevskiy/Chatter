import React from 'react';
import obj from '../Messages.module.css';


type MessagePropsType = {
    message: string
}

function Message_item(props: MessagePropsType) {
    return <div className={obj.message_item}>{props.message}</div>
}


export default Message_item;