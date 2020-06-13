import React from 'react';
import FriendItem from './FriendItem/FriendItem';
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import Friends from "./Friends";

type FriendsDataArrayType = {
    id: number
    user_name: string
    img_path: string
}
type MapStatePropsType = {
    friendElements: JSX.Element[]
}

let mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        friendElements: state.friendPage.friendData.map((t: FriendsDataArrayType) => {
            return (
                <FriendItem key={t.id} user_name={t.user_name} img_path={t.img_path}/>
            )
        })
    }
}


let FriendsContainer = connect<MapStatePropsType, {}, {}, RootState>(mapStateToProps, {})(Friends);

export default FriendsContainer;