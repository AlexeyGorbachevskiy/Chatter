import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from "./profileReducer";
import messagesItemReducer from "./messagesItemReducer";
import friendsReducer from "./friendsReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';


let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: messagesItemReducer,
        // friendsPage: friendsReducer,
        findFriendsPage: friendsReducer,
        auth: authReducer,
        form: formReducer,
    }
);

export type RootState = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export default store;