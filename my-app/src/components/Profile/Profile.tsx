import React from 'react';
import obj from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';

type ProfilePropsType={
    profilePage: ProfilePageType
    addPost: ()=>void
    updateNewPostText: (newText: string)=>void
}

function Profile(props:ProfilePropsType) {

    return (
        <div className={obj.content}>
            <ProfileInfo/>
            <MyPosts postData={props.profilePage.postData} newPostText={props.profilePage.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}


export default Profile;