import {DispatchActionType, FriendPageType} from "./redux-store";


type FriendReducerType = (state: FriendPageType, action: DispatchActionType) => FriendPageType

let initialState = {
    friendData: [
        {id: 1, user_name: 'Jeff Bezos', img_path: 'Bezos.png'},
        {id: 2, user_name: 'Elon Musk', img_path: 'Musk.png'},
        {id: 3, user_name: 'Jordan Peterson', img_path: 'Peterson.webp'},
        {id: 4, user_name: 'Mark Zuckerberg', img_path: 'Zuckerberg.png'},
        {id: 5, user_name: 'Michael  Jordan', img_path: 'Jordan.png'}
    ],
}


const friendReducer: FriendReducerType = (state = initialState, action) => {
    return state;
}

export default friendReducer;


