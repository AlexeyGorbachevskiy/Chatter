import {createStore, combineReducers} from 'redux';
import profileReducer from "./profileReducer";
import messagesItemReducer from "./messagesItemReducer";
import friendsReducer from "./friendsReducer";
import authReducer from "./authReducer";


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

let store = createStore(rootReducer);


export default store;