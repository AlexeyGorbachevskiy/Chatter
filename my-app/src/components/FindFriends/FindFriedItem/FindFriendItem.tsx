import React from 'react';
import obj from './FindFriendItem.module.css';
import {NavLink} from 'react-router-dom';
import {UsersArrayType} from "../../../redux/friendsReducer";


type FriendItemType = {
    userInfo: UsersArrayType
}


function FindFriendItem(props: FriendItemType) {


    return (
        <div className={obj.friend_item_container}>
            <div className={obj.img_wrapper}>
                <NavLink to='#' className={obj.link}>
                    <img className={obj.ava}
                         src={'img/friend_images/' + props.userInfo.imgName}
                         alt='Avatar'/>
                </NavLink>
            </div>
            <div className={obj.info_grid}>
                <div className={obj.info_wrapper}>
                    <div className={obj.name}>
                        <NavLink to="#" className={obj.link}>
                            <h2>{`${props.userInfo.fullName},`}</h2>
                        </NavLink>
                        <p className={obj.age}>&nbsp; {`${props.userInfo.age} years old`}</p>
                    </div>
                    <p className={obj.status}>{props.userInfo.status}</p>
                </div>
                <div className={obj.follow_wrapper}>
                    <p className={obj.location}>{`${props.userInfo.location.city}, ${props.userInfo.location.country}`}</p>
                    <button
                        className={props.userInfo.followed ? obj.unfollow_btn : obj.follow_btn}>
                        {props.userInfo.followed ? 'Unfollow' : 'Follow'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FindFriendItem;