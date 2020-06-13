import {createStore, combineReducers} from 'redux';
import profileReducer from "./profileReducer";
import messagesItemReducer from "./messagesItemReducer";
import friendReducer from "./friendReducer";


let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: messagesItemReducer,
        friendPage: friendReducer,
    }
);

export type RootState = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);


export default store;