import React from 'react';
import obj from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profileReducer";


type ProfileInfo = {
    profile: ProfileType | null
}

function ProfileInfo(props: ProfileInfo) {
    return (
        <div className={obj.data_wrapper}>
            <div className={obj.ava_wrapper}>
                <img className={obj.ava}
                     src={props.profile?.photos.large
                         ?
                         props.profile?.photos.large
                         : process.env.PUBLIC_URL + '/img/default.png'}
                     alt='Avatar'
                />
            </div>
            <div className={obj.data}>
                <div className={obj.data_header}>
                    <h2>
                        {props.profile?.fullName
                            .replace(props.profile?.fullName[0], props.profile?.fullName[0].toUpperCase())}
                    </h2>
                </div>
                <div className={obj.data_items}>
                    <div className={obj.date}>
                        <p>About me: {props.profile?.aboutMe ? props.profile?.aboutMe : 'I love Javascript.'}</p>
                    </div>
                    <div className={obj.city}>
                        <p>Job search
                            status: {props.profile?.lookingForAJob ? props.profile?.lookingForAJob : 'Looking for a job.'}</p>
                    </div>
                    <div className={obj.education}>
                        <p>Job description: {props.profile?.lookingForAJobDescription ? props.profile.lookingForAJobDescription : 'Looking for a frontend developer position.'}
                        </p>
                    </div>
                    <div className={obj.marital_status}>
                        <p>My contacts: {props.profile?.contacts.twitter ? props.profile?.contacts.twitter : 'Oops.'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProfileInfo;