import React from 'react';
import {
    addPostActionCreator, PostDataArray, ProfileReducerActionTypes,
    updateNewPostTextActionCreator
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootState} from "../../../redux/redux-store";
import {Dispatch} from 'redux';


type MapStatePropsType = {
    postData: Array<PostDataArray>
    newPostText: string
}
type MapDispatchPropsType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
}


let mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ProfileReducerActionTypes>): MapDispatchPropsType => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        updateNewPostText: (newText: string) => dispatch(updateNewPostTextActionCreator(newText)),
    }
}


let MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, RootState>
(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;