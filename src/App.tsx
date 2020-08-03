import React from 'react';
import './App.css';
import Nav from './components/NavBar/Nav';
import News from './components/News/News';
import Music from './components/Music/Music';
import FriendsContainer from "./components/Friends/FriendsContainer";
import {BrowserRouter, HashRouter, Redirect, Route, withRouter} from 'react-router-dom';
import MessagesContainer from "./components/Messages/MessagesContainer";
import FindFriendsContainer from "./components/FindFriends/FindFriendsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import store, {RootState} from "./redux/redux-store";
import {AuthReducerActionTypes} from "./redux/authReducer";
import {ThunkDispatch} from "redux-thunk";
import {compose} from "redux";
import {initializeAppThunkCreator} from "./redux/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";
import SettingsContainer from "./components/Settings/SettingsContainer";

class App extends React.Component<MapDispatchPropsType & MapStatePropsType, {}> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (

            <div className='container'>
                <HeaderContainer/>
                <Nav/>
                <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/friends' render={() => <FriendsContainer/>}/>
                <Route path='/messages' render={() => <MessagesContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <SettingsContainer/>}/>
                <Route path='/findFriends' render={() => <FindFriendsContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>
                {/*<Route path='/profile' component={Profile}/>*/}
            </div>

        );
    }
}

type MapStatePropsType = {
    initialized: boolean
}

const mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        initialized: state.app.initialized
    }
}


type MapDispatchPropsType = {
    initializeApp: () => void
}


const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, unknown, AuthReducerActionTypes>)
    : MapDispatchPropsType => {
    return {
        initializeApp: () => {
            dispatch(initializeAppThunkCreator())
        },
    }
}


let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect<MapStatePropsType, MapDispatchPropsType, {}, RootState>(mapStateToProps, mapDispatchToProps)
)(App)


export const Chatter: React.FC = () => {
    return (
        <HashRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <AppContainer/>
                </Provider>
            </React.StrictMode>
        </HashRouter>
    )
}
