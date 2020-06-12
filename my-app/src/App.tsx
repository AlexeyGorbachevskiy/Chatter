import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Nav from './components/NavBar/Nav';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';


type AppPropsType = {
    store: any
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='container'>
                <Header/>
                <Nav/>
                <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/friends' render={() => <Friends store={props.store}/>}/>
                <Route path='/messages' render={() => <Messages store={props.store}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                {/*<Route path='/profile' component={Profile}/>*/}
            </div>
        </BrowserRouter>
    );
}

export default App;
