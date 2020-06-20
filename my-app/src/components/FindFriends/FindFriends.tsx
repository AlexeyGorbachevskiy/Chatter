import React from 'react';
import obj from './FindFriends.module.css';
import {UsersArrayType} from "../../redux/friendsReducer";


type FindFriendsPropsType = {
    users: Array<UsersArrayType>
    // setUsers: (users: Array<UsersArrayType>) => void
}


function FindFriends(props: FindFriendsPropsType) {
    // if (props.users.length === 0) {
    //     props.setUsers([{
    //         id: 1,
    //         followed: true,
    //         name: 'Jeff',
    //         surname: 'Bezos',
    //         status: 'Hey, how you doing?',
    //         location: {city: 'Minsk', country: 'Belarus'},
    //         imgName: "Bezos.png"
    //     },
    //         {
    //             id: 2,
    //             followed: false,
    //             name: 'Alex',
    //             surname: 'Ferguson',
    //             status: 'Hi all!!!',
    //             location: {city: 'Moscow', country: 'Russia'},
    //             imgName: "Bezos.png"
    //         },
    //         {
    //             id: 3,
    //             followed: false,
    //             name: 'Boris',
    //             surname: 'Elcin',
    //             status: 'Hey, how are you?',
    //             location: {city: 'Minsk', country: 'Belarus'},
    //             imgName: "Bezos.png"
    //         },
    //
    //     ]);
    // }
    return (
        <div className={obj.find_friends_container}>

            {props.users.map((u) => {
                    return (
                        <div key={u.id}>
                        <span>
                            <div>
                                <img/>
                            </div>
                            <div>
                                <button>Follow</button>
                            </div>
                        </span>
                            <span>
                                <span>{u.fullName}{u.status}</span>
                                <span></span>
                            </span>

                        </div>
                    )
                }
            )}

        </div>
    );
}


export default FindFriends;