import React from 'react';
import obj from './Friends.module.css';
import FriendItem from './FriendItem/FriendItem';

export type FriendsDataArray = {
    id: number
    user_name: string
    img_path: string
}

type FriendsPropsType = {
    store: any
}

function Friends(props: FriendsPropsType) {
    let friendElements = props.store.getState().friendPage.friendData.map((t: FriendsDataArray) => {
        return (
            <FriendItem key={t.id} user_name={t.user_name} img_path={t.img_path}/>
        )
    })
    return (
        <div className={obj.friends_container}>
            <div className={obj.friends_list}>
                {friendElements}
            </div>
        </div>
    );
}


export default Friends;