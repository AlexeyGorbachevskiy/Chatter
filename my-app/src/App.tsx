import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Nav from "./components/NavBar/Nav";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {StatePropsType} from "./redux/state";


function App(props: StatePropsType) {
    return (
        <BrowserRouter>
            <div className='container'>
                <Header/>
                <Nav/>
                <Route exact path="/" render={() => <Redirect to={"/profile"}/>}/>
                <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage}/>}/>
                <Route path="/friends" render={() => <Friends/>}/>
                <Route path="/messages" render={() => <Messages messagesPage={props.state.messagesPage}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                {/*<Route path="/profile" component={Profile}/>*/}
            </div>
        </BrowserRouter>
    );
}

export default App;
