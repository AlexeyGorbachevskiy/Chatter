import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {ProfileReducerActionTypes, ProfileType, setUserProfileAC} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router";


export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType;
export type PathParamsType = { userId?: string | undefined }
export type WithRouterPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType;

class ProfileContainer extends React.Component<WithRouterPropsType, {}> {


    componentDidMount() {
        let userId=this.props.match.params.userId;
        if(!userId){
            userId='8963';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
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
    setUserProfile: (profile: ProfileType) => void
}

const mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ProfileReducerActionTypes>): MapDispatchPropsType => {
    return {
        setUserProfile: (profile: ProfileType) => dispatch(setUserProfileAC(profile))
    }
}


let WithUrlDataContainer = withRouter(ProfileContainer);

export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootState>
(mapStateToProps, mapDispatchToProps)(WithUrlDataContainer);