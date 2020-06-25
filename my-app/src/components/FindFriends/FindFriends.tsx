import React from 'react';
import obj from './FindFriends.module.css';
import {UsersArrayType} from "../../redux/friendsReducer";
import axios from 'axios';

type FindFriendsPropsType = {
    users: JSX.Element[]
    setUsers: (users: Array<UsersArrayType>) => void
}


function FindFriends(props: FindFriendsPropsType) {

    if (props.users.length === 0) {

        // axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
        //     props.setUsers(response.data.items)
        // })


        // props.setUsers([
        //     {
        //         id: 1,
        //         followed: true,
        //         fullName: 'Jeff Bezos',
        //         status: 'Hey, how you doing?',
        //         location: {city: 'Minsk', country: 'Belarus'},
        //         imgName: "Bezos.png",
        //         age: 43,
        //     },
        //     {
        //         id: 2,
        //         followed: true,
        //         fullName: 'Elon Musk',
        //         status: 'Hi all!!!',
        //         location: {city: 'Moscow', country: 'Russia'},
        //         imgName: "Musk.png",
        //         age: 29,
        //     },
        //     {
        //         id: 3,
        //         followed: true,
        //         fullName: 'Jordan Peterson',
        //         status: 'Hey, how are you?',
        //         location: {city: 'Minsk', country: 'Belarus'},
        //         imgName: "Peterson.webp",
        //         age: 28,
        //     },
        //     {
        //         id: 4,
        //         followed: true,
        //         fullName: 'Mark Zuckerberg',
        //         status: 'Hey, how are you?',
        //         location: {city: 'Minsk', country: 'Belarus'},
        //         imgName: "Zuckerberg.png",
        //         age: 36,
        //     },
        //     {
        //         id: 5,
        //         followed: true,
        //         fullName: 'Michael  Jordan',
        //         status: 'Hey, how are you?',
        //         location: {city: 'Minsk', country: 'Belarus'},
        //         imgName: "Jordan.png",
        //         age: 58,
        //     },
        // ]);

    }
    return (
        <div className={obj.friends_container}>
            <div className={obj.friends_list}>
                {props.users}
                <span className={obj.show_more_wrapper}>
                <button className={obj.show_more_btn}> Show more &nbsp;
                    <i className="fa fa-angle-double-down" aria-hidden="true"/>
                 </button>
                </span>
            </div>


        </div>
    );
}


export default FindFriends;