import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {AuthReducerActionTypes, getAuthInfoThunkCreator, UserDataType} from "../../redux/authReducer";
import {ThunkDispatch} from "redux-thunk";


export type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType;


class HeaderContainer extends React.Component<HeaderContainerPropsType, {}> {
    componentDidMount() {
        this.props.getAuthInfoThunkCreator();
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}


type MapStatePropsType = {
    userData: UserDataType
    isAuth: boolean
}

type MapDispatchPropsType = {
    getAuthInfoThunkCreator: () => void
}

const mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        userData: state.auth.data,
        isAuth: state.auth.isAuth,
    }
}


const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, unknown, AuthReducerActionTypes>)
    : MapDispatchPropsType => {
    return {
        getAuthInfoThunkCreator: () => {
            dispatch(getAuthInfoThunkCreator())
        },
    }
}


export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootState>
(mapStateToProps, mapDispatchToProps)(HeaderContainer);