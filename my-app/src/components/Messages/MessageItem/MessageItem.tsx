import React from 'react';
import obj from './MessageItem.module.css';
import YourMessage from './YourMessage/YourMessage';
import NotYourMessage from './NotYourMessage/NotYourMessage';


function MessageItem() {
    return <div className={obj.message_side_container}>
        <div className={obj.message_item}>
            <NotYourMessage/>
            <YourMessage/>
        </div>
        <div className={obj.input_container}>
            {/*<input className={obj.input} type='text' placeholder={'Type your message...'}/>*/}
            <textarea  wrap={'off'} className={obj.input}  placeholder={'Write a message...'}  />

            <button className={obj.send_btn}> Send</button>
        </div>
    </div>
}


export default MessageItem;