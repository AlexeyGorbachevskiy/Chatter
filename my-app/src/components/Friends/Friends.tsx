import React from 'react';
import obj from './Friends.module.css';
import axios from "axios";
import {UsersArrayType} from "../../redux/friendsReducer";


type FriendsPropsType = {
    users: JSX.Element[]
}

function Friends(props: FriendsPropsType) {

    return (
        <div className={obj.friends_container}>
            <div className={obj.friends_list}>
                {props.users}
            </div>
        </div>
    );
}


export default Friends;