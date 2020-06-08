import React from 'react';
import obj from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {DispatchActionType, ProfilePageType} from '../../redux/state';

type ProfilePropsType={
    profilePage: ProfilePageType
    dispatch: (action:DispatchActionType)=>void
}

function Profile(props:ProfilePropsType) {

    return (
        <div className={obj.content}>
            <ProfileInfo/>
            <MyPosts postData={props.profilePage.postData} newPostText={props.profilePage.newPostText} dispatch={props.dispatch}/>
        </div>
    );
}


export default Profile;