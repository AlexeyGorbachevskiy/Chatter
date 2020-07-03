import React from 'react';
import obj from './FindFriendItem.module.css';
import {NavLink} from 'react-router-dom';
import {UsersArrayType} from "../../../redux/friendsReducer";


type FriendItemType = {
    users: UsersArrayType
}


function FindFriendItem(props: FriendItemType) {


    return (
        <div className={obj.friend_item_container}>
            <div className={obj.img_wrapper}>
                <NavLink to={'/profile/' + props.users.id} className={obj.link}>
                    <img className={obj.ava}
                         src={props.users.photos.small !== null ? props.users.photos.small : 'img/default.png'}
                         alt='Avatar'/>
                </NavLink>
            </div>
            <div className={obj.info_grid}>
                <div className={obj.info_wrapper}>
                    <div className={obj.name}>
                        <NavLink to={'/profile/' + props.users.id} className={obj.link}>
                            <h2>{`${props.users.name}`}</h2>
                        </NavLink>
                        {/*<p className={obj.age}>&nbsp; {`${props.users.age} years old`}</p>*/}
                    </div>
                    <p className={obj.status}>{props.users.status !== null ? props.users.status : 'What\'s cooking, good looking?'}</p>
                </div>
                <div className={obj.follow_wrapper}>
                    {/*<p className={obj.location}>{`${props.users.location.city}, ${props.users.location.country}`}</p>*/}
                    <button
                        className={props.users.followed ? obj.unfollow_btn : obj.follow_btn}>
                        {props.users.followed ? 'Unfollow' : 'Follow'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FindFriendItem;