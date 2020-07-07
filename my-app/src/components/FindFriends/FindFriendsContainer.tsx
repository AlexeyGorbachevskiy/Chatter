import React from 'react';
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    FriendsReducerActionTypes,
    setCurrentPageAC, setFollowingInProgressAC, setPreloaderAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersArrayType
} from "../../redux/friendsReducer";
import FindFriends from "./FindFriends";
import {userAPI} from "../../API/API";


export type MapStatePropsType = {
    users: Array<UsersArrayType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowingInProgress:boolean
    followingInProgress:Array<number>
}

export type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersArrayType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (usersCount: number) => void
    setPreloader: (isFetching: boolean) => void
    setFollowingInProgress:(isFollowingInProgress:boolean,userId:number)=>void
}

let mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        users: state.findFriendsPage.users,
        pageSize: state.findFriendsPage.pageSize,
        totalUsersCount: state.findFriendsPage.totalUsersCount,
        currentPage: state.findFriendsPage.currentPage,
        isFetching: state.findFriendsPage.isFetching,
        isFollowingInProgress: state.findFriendsPage.isFollowingInProgress,
        followingInProgress:state.findFriendsPage.followingInProgress,
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
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        setPreloader: (isFetching) => {
            dispatch(setPreloaderAC(isFetching))
        },
        setFollowingInProgress:(isFollowingInProgress,userId)=>{
          dispatch(setFollowingInProgressAC(isFollowingInProgress,userId))
        },
    }
}


export type FindFriendsAPIContainerPropsType = MapStatePropsType & MapDispatchPropsType;

class FindFriendsAPIContainer extends React.Component<FindFriendsAPIContainerPropsType, RootState> {

    componentDidMount() {
        this.props.setPreloader(true);

        userAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setPreloader(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setPreloader(true);
        this.props.setCurrentPage(pageNumber);
        userAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setPreloader(false);
                this.props.setUsers(data.items)
            })
    }


    render() {

        return (
            <FindFriends
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                isFetching={this.props.isFetching}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                setFollowingInProgress={this.props.setFollowingInProgress}
                isFollowingInProgress={this.props.isFollowingInProgress}
                followingInProgress={this.props.followingInProgress}
            />
        );
    }
}


let FindFriendsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, RootState>
(mapStateToProps, mapDispatchToProps)(FindFriendsAPIContainer);


export default FindFriendsContainer;