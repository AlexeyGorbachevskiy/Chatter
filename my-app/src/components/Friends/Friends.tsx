import React from 'react';
import obj from './Friends.module.css';


type FriendsPropsType = {
    friendElements: JSX.Element[]
}

function Friends(props: FriendsPropsType) {
    return (
        <div className={obj.friends_container}>
            <div className={obj.friends_list}>
                {props.friendElements}
            </div>
        </div>
    );
}


export default Friends;