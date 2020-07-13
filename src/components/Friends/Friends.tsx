import React from 'react';
import obj from './Friends.module.css';
import {UsersArrayType} from "../../redux/friendsReducer";
import FriendItem from "./FriendItem/FriendItem";


type FriendsPropsType = {
    users: Array<UsersArrayType>
}

function Friends(props: FriendsPropsType) {

    return (
        <div className={obj.friends_container}>
            <div className={obj.friends_list}>
                {props.users.filter((u: UsersArrayType) => u.followed).map((t: UsersArrayType) => {
                    return (
                        <FriendItem key={t.id} users={t}/>
                    )
                })}
            </div>
        </div>
    );
}


export default Friends;