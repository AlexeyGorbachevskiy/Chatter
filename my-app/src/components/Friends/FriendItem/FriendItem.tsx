import React from 'react';
import obj from './FriendItem.module.css';
import {NavLink} from 'react-router-dom';

type PhotosType = {
    small: string
    large: string
}

type UsersType = {
    name: string
    photos: PhotosType
}

type FriendItemPropsType = {
    users: UsersType
}


function FriendItem(props: FriendItemPropsType) {
    return (
        <div className={obj.friend_item_container}>
            <div className={obj.img_wrapper}>
                <NavLink to='#' className={obj.link}>
                    <img className={obj.ava}
                         src={props.users.photos.small !== null ? props.users.photos.small : 'img/default.png'}
                         alt='Avatar'/>
                </NavLink>
            </div>
            <div className={obj.info_wrapper}>
                <div className={obj.name}>
                    <NavLink to="#" className={obj.link}>
                        <h2>{props.users.name}</h2>
                    </NavLink>
                </div>
                <p className={obj.to_messages}><NavLink to='#' className={obj.link}>Write message
                </NavLink></p>
            </div>
        </div>
    );
}

export default FriendItem;