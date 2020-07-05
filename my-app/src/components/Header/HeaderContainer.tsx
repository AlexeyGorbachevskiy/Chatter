import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {AuthReducerActionTypes, setAuthUserDataAC, UserDataType} from "../../redux/authReducer";


export type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType;


class HeaderContainer extends React.Component<HeaderContainerPropsType, {}> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data);
                    debugger;
                }
            })
    }

    render() {
        return (
            //
            <Header {...this.props}/>
        );
    }
}


type MapStatePropsType = {
    userData: UserDataType
}

type MapDispatchPropsType = {
    setAuthUserData: (authUserData: UserDataType) => void
}

const mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        userData: state.auth,
    }
}


const mapDispatchToProps = (dispatch: Dispatch<AuthReducerActionTypes>): MapDispatchPropsType => {
    return {
        setAuthUserData: (authUserData: UserDataType) => {
            dispatch(setAuthUserDataAC(authUserData))
        },
    }
}


export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootState>
(mapStateToProps, mapDispatchToProps)(HeaderContainer);
;