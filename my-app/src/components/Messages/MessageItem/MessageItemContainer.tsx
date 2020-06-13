import React, {Dispatch} from 'react';
import {
    MessagesReducerActionTypes,
    sendMessageBodyActionCreator,
    updateNewMessageBodyActionCreator
} from "../../../redux/messagesItemReducer";
import MessageItem from "./MessageItem";
import {connect} from "react-redux";
import {RootState} from "../../../redux/redux-store";
import {DialogsDataArray, MessagesDataArray} from "../Messages";


type MapStatePropsType = {
    messagesPage: {
        dialogsData: Array<DialogsDataArray>
        messagesData: Array<MessagesDataArray>
        newMessageBody: string
    }
}

type MapDispatchPropsType = {
    sendMessageClick: () => void
    changeTextArea: (currentValue: string) => void
}

let mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch<MessagesReducerActionTypes>): MapDispatchPropsType => {
    return {
        sendMessageClick: () => {
            dispatch(sendMessageBodyActionCreator());
        },
        changeTextArea: (currentValue: string) => {
            dispatch(updateNewMessageBodyActionCreator(currentValue));
        }
    }
};
let MessageItemContainer = connect<MapStatePropsType,MapDispatchPropsType,{},RootState>(mapStateToProps, mapDispatchToProps)(MessageItem);


export default MessageItemContainer;