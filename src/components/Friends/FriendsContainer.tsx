import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {RootState} from "../../redux/redux-store";
import Friends from "./Friends";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";
import {UsersArrayType} from "../../redux/friendsReducer";


type MapStatePropsType = {
    users: Array<UsersArrayType>
    isAuth: boolean
}

let mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        users: state.findFriendsPage.users,
        isAuth: state.auth.isAuth,
    }
}


export default compose(
    withAuthRedirect,
    connect<MapStatePropsType, {}, {}, RootState>(mapStateToProps, {}),
)(Friends)

//without compose
// let AuthRedirectComponent = withAuthRedirect(Friends);
// let FriendsContainer = connect<MapStatePropsType, {}, {}, RootState>(mapStateToProps, {})(AuthRedirectComponent);
// export default FriendsContainer;