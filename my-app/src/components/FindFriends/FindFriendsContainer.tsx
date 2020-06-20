import React from 'react';
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import FindFriends from "./FindFriends";

import {Dispatch} from "redux";
import {followAC, FriendsReducerActionTypes, setUsersAC, unfollowAC, UsersArrayType} from "../../redux/friendsReducer";



export type MapStatePropsType = {
    users: Array<UsersArrayType>
}

export type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersArrayType>) => void
}

let mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        users: state.findFriendsPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch<FriendsReducerActionTypes>): MapDispatchPropsType => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}


let FindFriendsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, RootState>
(mapStateToProps, mapDispatchToProps)(FindFriends);


export default FindFriendsContainer;