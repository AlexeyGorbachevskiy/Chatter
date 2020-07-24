import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {compose} from "redux";
import {RootState} from "../../redux/redux-store";
import {
    getProfileInfoThunkCreator, getStatusThunkCreator, ProfileReducerActionTypes,
    ProfileType, updateStatusThunkCreator,
} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router";
import {ThunkDispatch} from "redux-thunk";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";


export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType;
export type PathParamsType = { userId?: string | undefined }
export type WithRouterPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType;

class ProfileContainer extends React.Component<WithRouterPropsType, {}> {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            if (this.props.authorizedUserId) {
                userId = this.props.authorizedUserId.toString();

            }

        }
        this.props.getProfileInfo(userId!);
        this.props.getStatus(parseInt(userId!));
    }

    componentDidUpdate(prevProps: Readonly<WithRouterPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({...this.state, status: this.props.status})
        }
    }


    render() {
        return (
            <Profile {...this.props}/>
        );
    }
}

type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    getProfileInfo: (userId: string) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}

const mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.data.id,
        isAuth: state.auth.isAuth,
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, unknown, ProfileReducerActionTypes>)
    : MapDispatchPropsType => {
    return {
        getProfileInfo: (userId) => dispatch(getProfileInfoThunkCreator(userId)),
        getStatus: (userId: number) => dispatch(getStatusThunkCreator(userId)),
        updateStatus: (status: string) => dispatch(updateStatusThunkCreator(status)),
    }
}

export default compose(
    withAuthRedirect,
    withRouter,
    connect<MapStatePropsType, MapDispatchPropsType, {}, RootState>
    (mapStateToProps, mapDispatchToProps)
)(ProfileContainer)

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// let WithUrlDataContainer = withRouter(AuthRedirectComponent);
// export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootState>
// (mapStateToProps, mapDispatchToProps)(WithUrlDataContainer);