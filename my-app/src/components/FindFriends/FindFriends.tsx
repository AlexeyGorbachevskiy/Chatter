import React from 'react';
import obj from "./FindFriends.module.css";
import Preloader from "../Common/Preloader/Preloader";
import {UsersArrayType} from "../../redux/friendsReducer";
import FindFriendItem from "./FindFriedItem/FindFriendItem";


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
                            />
                        )
                    })
                }

                <span className={obj.footer_wrapper}>
                        <button className={obj.back_btn}>
                            <i className="fa fa-angle-double-left" aria-hidden="true"/>
                            &nbsp; Back
                         </button>
                        <span className={obj.pages_wrapper}>
                        {pages.map((pageNumber: number) => <span
                            className={props.currentPage === pageNumber ? `${obj.page} ${obj.current_page_is_active}` : obj.page}
                            key={pageNumber} onClick={() => props.onPageChanged(pageNumber)}>{pageNumber}</span>)}
                        </span>
                        <button className={obj.next_btn}> Next &nbsp;
                            <i className="fa fa-angle-double-right" aria-hidden="true"/>
                         </button>
                </span>
            </div>
        </div>

    )
}


export default FindFriends;