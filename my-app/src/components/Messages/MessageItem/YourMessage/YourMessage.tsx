import React from 'react';
import obj from './YourMessage.module.css';

function YourMessage() {

    const name = 'I\'m';
    const message_text = 'I\'m fine. How\'re you?';
    const time = '20:00';
    return (
        <div className={obj.message_container}>

            <div className={obj.message_body}>
                <h4>{name}</h4>

                <div className={obj.message_wrapper}>
                    <p className={obj.message_text}>{message_text}</p>
                </div>

                <div className={obj.time_wrapper}>
                    <p className={obj.time}>{time}</p>
                </div>
            </div>
        </div>
    );
}


export default YourMessage;