import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import Messages from "./Messages";

type DialogsDataArray = {
    id: number
    name: string
}

type MapStatePropsType = {
    dialogElements: JSX.Element[]
}

let mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        dialogElements: state.messagesPage.dialogsData.map((t: DialogsDataArray) => {
            return <DialogItem key={t.id} user_name={t.name} user_id={t.id}/>
        })
    }
}


let MessagesContainer = connect<MapStatePropsType, {}, {}, RootState>
(mapStateToProps, {})(Messages);


export default MessagesContainer;