import React from 'react';
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    FriendsReducerActionTypes,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersArrayType
} from "../../redux/friendsReducer";
import FindFriendItem from "./FindFriedItem/FindFriendItem";
import FindFriends from "./FindFriends";


export type MapStatePropsType = {
    users: JSX.Element[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersArrayType>) => void
    setCurrentPage:(pageNumber:number)=>void
    setTotalUsersCount:(usersCount:number)=>void
}

let mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        users: state.findFriendsPage.users.map((t: UsersArrayType) => {
            return (
                <FindFriendItem key={t.id} users={t}/>
            )
        }),
        pageSize: state.findFriendsPage.pageSize,
        totalUsersCount: state.findFriendsPage.totalUsersCount,
        currentPage: state.findFriendsPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalUsersCount)=>{
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
}


let FindFriendsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, RootState>
(mapStateToProps, mapDispatchToProps)(FindFriends);


export default FindFriendsContainer;