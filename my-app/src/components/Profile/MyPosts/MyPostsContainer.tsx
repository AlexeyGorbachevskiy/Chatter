import React from 'react';
import {
    addPostActionCreator,
    profileReducerActionTypes,
    updateNewPostTextActionCreator
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootState} from "../../../redux/redux-store";



let mapStateToProps = (state: RootState) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        updateNewPostText: (newText: string) => dispatch(updateNewPostTextActionCreator(newText)),
    }
}


let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;