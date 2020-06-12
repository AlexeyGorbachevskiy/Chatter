import {createStore, combineReducers} from 'redux';
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import friendReducer from "./friendReducer";


let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: messagesReducer,
        friendPage: friendReducer,
    }
);

export type RootState = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);


export default store;