import {createStore, combineReducers} from 'redux';
import profileReducer from "./profileReducer";
import messagesItemReducer from "./messagesItemReducer";
import friendsReducer from "./friendsReducer";


let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: messagesItemReducer,
        // friendsPage: friendsReducer,
        findFriendsPage:friendsReducer,
    }
);

export type RootState = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);


export default store;