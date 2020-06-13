import React from 'react';
import obj from './FriendItem.module.css';
import {NavLink} from 'react-router-dom';


type FriendItemType = {
    user_name: string
    img_path: string
}


function FriendItem(props: FriendItemType) {
    return (
        <div className={obj.friend_item_container}>
            <div className={obj.img_wrapper}>
                <NavLink to='#' className={obj.link}>
                    <img className={obj.ava}
                         src={'img/friend_images/' + props.img_path}
                         alt='Avatar'/>
                </NavLink>
            </div>
            <div className={obj.info_wrapper}>
                <div className={obj.name}>
                    <NavLink to="#" className={obj.link}>
                        <h2>{props.user_name}</h2>
                    </NavLink>
                </div>
                <p className={obj.to_messages}><NavLink to='#' className={obj.link}>Write message
                </NavLink></p>
            </div>
        </div>
    );
}

export default FriendItem;