import React from 'react';
import './App.css';
import Nav from './components/NavBar/Nav';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import FriendsContainer from "./components/Friends/FriendsContainer";
import {BrowserRouter, Redirect, Route, withRouter} from 'react-router-dom';
import MessagesContainer from "./components/Messages/MessagesContainer";
import FindFriendsContainer from "./components/FindFriends/FindFriendsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import store, {RootState} from "./redux/redux-store";
import {AuthReducerActionTypes, getAuthInfoThunkCreator} from "./redux/authReducer";
import {ThunkDispatch} from "redux-thunk";
import {compose} from "redux";

class App extends React.Component<MapDispatchPropsType, {}> {

    componentDidMount() {
        this.props.getAuthInfoThunkCreator();
    }

    render() {
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
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/findFriends' render={() => <FindFriendsContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>
                {/*<Route path='/profile' component={Profile}/>*/}
            </div>

        );
    }
}


type MapDispatchPropsType = {
    getAuthInfoThunkCreator: () => void
}


const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, unknown, AuthReducerActionTypes>)
    : MapDispatchPropsType => {
    return {
        getAuthInfoThunkCreator: () => {
            dispatch(getAuthInfoThunkCreator())
        }
    }
}


let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect<null, MapDispatchPropsType, {}, RootState>(null, mapDispatchToProps)
)(App)


export const Chatter: React.FC = () => {
    return (
        <BrowserRouter>
            <React.StrictMode>
                <Provider store={store}>
            <AppContainer/>
                </Provider>
            </React.StrictMode>
        </BrowserRouter>
    )
}
