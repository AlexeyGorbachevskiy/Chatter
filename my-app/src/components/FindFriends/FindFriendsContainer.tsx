import React from 'react';
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    FriendsReducerActionTypes,
    setCurrentPageAC, setPreloaderAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersArrayType
} from "../../redux/friendsReducer";
import FindFriendItem from "./FindFriedItem/FindFriendItem";
import axios from "axios";
import FindFriends from "./FindFriends";


export type MapStatePropsType = {
    users: JSX.Element[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersArrayType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (usersCount: number) => void
    setPreloader: (isFetching: boolean) => void
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
        currentPage: state.findFriendsPage.currentPage,
        isFetching: state.findFriendsPage.isFetching,

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
        }
    }
}


type FindFriendsAPIContainerPropsType = {
    users: JSX.Element[]
    setUsers: (users: Array<UsersArrayType>) => void
    pageSize: number
    totalUsersCount: number
    setTotalUsersCount: (usersCount: number) => void
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    isFetching: boolean
    setPreloader: (isFetching: boolean) => void

}

class FindFriendsAPIContainer extends React.Component<FindFriendsAPIContainerPropsType, RootState> {

    componentDidMount() {
        this.props.setPreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setPreloader(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setPreloader(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setPreloader(false);
                this.props.setUsers(response.data.items)
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
            />
        );
    }
}


let FindFriendsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, RootState>
(mapStateToProps, mapDispatchToProps)(FindFriendsAPIContainer);


export default FindFriendsContainer;