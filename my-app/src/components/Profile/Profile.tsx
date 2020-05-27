import React from 'react';
import obj from './Profile.module.css';
import avatar from '../../img/avatar.png';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
    return (
        <div className={obj.content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}


export default Profile;