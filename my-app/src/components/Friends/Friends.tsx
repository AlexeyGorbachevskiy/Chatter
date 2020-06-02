import React from 'react';
import obj from './Friends.module.css';
import FriendItem from './FriendItem/FriendItem';
import {AppPropsType, FriendsDataArray} from '../../redux/state';

function Friends(props: AppPropsType) {

    let friendElements = props.friendPage?.friendData.map((t: FriendsDataArray) => {
        return (
            <FriendItem user_name={t.user_name} img_path={t.img_path}/>
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