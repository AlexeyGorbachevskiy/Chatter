import React from 'react';
import obj from './FriendItem.module.css';
import {NavLink} from 'react-router-dom';
import {FriendsDataArray} from '../../../redux/state';


function FriendItem(props: FriendsDataArray) {
    return (

        <div className={obj.friend_item_container}>
            <div className={obj.img_wrapper}>
                {/*<img className={obj.ava} src={require('../../img/avatar.png')} alt="Avatar"/>*/}
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
        // <hr className={obj.underline}/>

    );
}

export default FriendItem;