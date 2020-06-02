import React from 'react';
import obj from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {AppPropsType} from '../../redux/state';


function Profile(props:AppPropsType) {

    return (
        <div className={obj.content}>
            <ProfileInfo/>
            <MyPosts postData={props.profilePage?.postData}/>
        </div>
    );
}


export default Profile;