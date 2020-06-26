import React from 'react';
import FriendItem from './FriendItem/FriendItem';
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import Friends from "./Friends";
import {UsersArrayType} from "../../redux/friendsReducer";


type MapStatePropsType = {
    users: JSX.Element[]
}

let mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        users: state.findFriendsPage.users.filter((u:UsersArrayType) => u.followed).map((t: UsersArrayType) => {
            return (
                <FriendItem key={t.id} users={t}/>
            )
        })
    }
}


let FriendsContainer = connect<MapStatePropsType, {}, {}, RootState>(mapStateToProps, {})(Friends);

export default FriendsContainer;