import React from 'react';
import {sendMessageBodyActionCreator, updateNewMessageBodyActionCreator} from "../../../redux/messagesReducer";
import MessageItem from "./MessageItem";
import {connect} from "react-redux";


let mapStateToProps = (state:any) => {
    return {
        messagesPage: state.messagesPage
    }
};

let mapDispatchToProps = (dispatch:any) => {
    return {
        sendMessageClick:()=>{dispatch(sendMessageBodyActionCreator());},
        changeTextArea:(currentValue: string)=>{dispatch(updateNewMessageBodyActionCreator(currentValue));}
    }
};
let MessageItemContainer = connect(mapStateToProps, mapDispatchToProps)(MessageItem);


export default MessageItemContainer;