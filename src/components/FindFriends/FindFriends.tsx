import React from 'react';
import obj from "./FindFriends.module.css";
import Preloader from "../Common/Preloader/Preloader";
import {UsersArrayType} from "../../redux/friendsReducer";
import FindFriendItem from "./FindFriedItem/FindFriendItem";
import Paginator from "../Common/Paginator/Paginator";


type FindFriendsPropsType = {
    users: Array<UsersArrayType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    isFetching: boolean
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setFollowingInProgress:(isFollowingInProgress:boolean,userId:number)=>void
    isFollowingInProgress:boolean
    followingInProgress:Array<number>
    followThunkCreator:(userId:number)=>void
    unFollowThunkCreator:(userId:number)=>void
}


function FindFriends(props: FindFriendsPropsType) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages: Array<number> = [];
    for (let i = 1; i <= 10; i++) {
        pages.push(i);
    }

    return (

        <div className={obj.friends_container}>
            <div className={obj.friends_list}>

                {
                    props.isFetching ?
                        <div className={obj.preloader_wrapper}>
                            <Preloader/>
                        </div>
                        : null
                }

                {
                    props.users.map((t: UsersArrayType) => {
                        return (
                            <FindFriendItem key={t.id}
                                            users={t}
                                            follow={props.follow}
                                            unfollow={props.unfollow}
                                            setFollowingInProgress={props.setFollowingInProgress}
                                            isFollowingInProgress={props.isFollowingInProgress}
                                            followingInProgress={props.followingInProgress}
                                            followThunkCreator={props.followThunkCreator}
                                            unFollowThunkCreator={props.unFollowThunkCreator}
                            />
                        )
                    })
                }

                <span className={obj.footer_wrapper}>
                       <Paginator pages={pages} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
                </span>
            </div>
        </div>

    )
}


export default FindFriends;