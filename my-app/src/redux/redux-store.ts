import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from "./profileReducer";
import messagesItemReducer from "./messagesItemReducer";
import friendsReducer from "./friendsReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';


let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: messagesItemReducer,
        // friendsPage: friendsReducer,
        findFriendsPage: friendsReducer,
        auth: authReducer,
    }
);

export type RootState = ReturnType<typeof rootReducer>

let store = createStore(rootReducer,applyMiddleware(thunkMiddleware));


export default store;