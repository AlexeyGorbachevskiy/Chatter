import React from 'react';
import './App.css';
import Nav from './components/NavBar/Nav';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import FriendsContainer from "./components/Friends/FriendsContainer";
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import MessagesContainer from "./components/Messages/MessagesContainer";
import FindFriendsContainer from "./components/FindFriends/FindFriendsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App() {
    return (
        <BrowserRouter>
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
                {/*<Route path='/profile' component={Profile}/>*/}
            </div>
        </BrowserRouter>
    );
}

export default App;
