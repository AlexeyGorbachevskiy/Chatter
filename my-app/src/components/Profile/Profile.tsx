import React from 'react';
import obj from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from './ProfileInfo/ProfileInfo';




function Profile() {

    return (
        <div className={obj.content}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    );
}


export default Profile;