import React from 'react'
import obj from "./FindFriends.module.css";
import axios from "axios";
import {setCurrentPageAC, UsersArrayType} from "../../redux/friendsReducer";
import {RootState} from "../../redux/redux-store";

type FindFriendsPropsType = {
    users: JSX.Element[]
    setUsers: (users: Array<UsersArrayType>) => void
    pageSize: number
    totalUsersCount: number
    setTotalUsersCount: (usersCount: number) => void
    currentPage: number
    setCurrentPage: (pageNumber: number) => void

}

class FindFriends extends React.Component<FindFriendsPropsType, RootState> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages: Array<number> = [];
        for (let i = 1; i <= 10; i++) {
            pages.push(i);
        }
        return (
            <div className={obj.friends_container}>
                <div className={obj.friends_list}>
                    {this.props.users}
                    <span className={obj.footer_wrapper}>
                        <button className={obj.back_btn}>
                            <i className="fa fa-angle-double-left" aria-hidden="true"/>
                            &nbsp; Back
                         </button>
                        <span className={obj.pages_wrapper}>
                        {pages.map((pageNumber: number) => <span
                            className={this.props.currentPage === pageNumber ? `${obj.page} ${obj.current_page_is_active}` : obj.page}
                            key={pageNumber} onClick={() => this.onPageChanged(pageNumber)}>{pageNumber}</span>)}
                        </span>
                        <button className={obj.next_btn}> Next &nbsp;
                            <i className="fa fa-angle-double-right" aria-hidden="true"/>
                         </button>
                </span>
                </div>
            </div>
        );
    }
}

export default FindFriends;