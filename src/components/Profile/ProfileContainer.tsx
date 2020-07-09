import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {
    getProfileInfoThunkCreator, ProfileReducerActionTypes,
    ProfileType,
} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router";
import {ThunkDispatch} from "redux-thunk";


export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType;
export type PathParamsType = { userId?: string | undefined }
export type WithRouterPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType;

class ProfileContainer extends React.Component<WithRouterPropsType, {}> {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '8963';
        }
        this.props.getProfileInfoThunkCreator(userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        );
    }
}

type MapStatePropsType = {
    profile: ProfileType | null
}
type MapDispatchPropsType = {
    getProfileInfoThunkCreator: (userId: string) => void
}

const mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, unknown, ProfileReducerActionTypes>)
    : MapDispatchPropsType => {
    return {
        getProfileInfoThunkCreator: (userId) => dispatch(getProfileInfoThunkCreator(userId))
    }
}


let WithUrlDataContainer = withRouter(ProfileContainer);

export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootState>
(mapStateToProps, mapDispatchToProps)(WithUrlDataContainer);