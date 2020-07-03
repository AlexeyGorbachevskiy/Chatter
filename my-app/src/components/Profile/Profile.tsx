import React from 'react';
import obj from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfileContainerPropsType, WithRouterPropsType} from "./ProfileContainer";
import Preloader from "../Common/Preloader/Preloader";


function Profile(props: WithRouterPropsType) {
    if (!props.profile) {
        return (
            <div className={obj.preloader_wrapper}>
                <Preloader/>
            </div>
        )
    }
    if ((props.profile) && (props.match.params.userId)) {
        if (parseInt(props.match.params.userId) !== props.profile.userId) {
            return (
                <div className={obj.preloader_wrapper}>
                    <Preloader/>
                </div>
            )
        }
    }
    return (
        <div className={obj.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
}


export default Profile;