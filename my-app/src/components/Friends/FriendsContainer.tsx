import React from 'react';
import FriendItem from './FriendItem/FriendItem';
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import Friends from "./Friends";
import {UsersArrayType} from "../../redux/friendsReducer";


type MapStatePropsType = {
    friendElements: JSX.Element[]
}

let mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        friendElements: state.friendsPage.users.filter((u)=>u.followed).map((t: UsersArrayType) => {
            return (
                <FriendItem key={t.id} fullName={t.fullName} imgName={t.imgName}/>
            )
        })
    }
}


let FriendsContainer = connect<MapStatePropsType, {}, {}, RootState>(mapStateToProps, {})(Friends);

export default FriendsContainer;