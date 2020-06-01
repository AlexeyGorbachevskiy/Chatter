import React from 'react';
import obj from '../Messages.module.css';
import {NavLink} from "react-router-dom";


type DialogPropsType = {
    user_id: number,
    user_name: string
}

function DialogItem(props: DialogPropsType) {
    let path = "/messages/" + props.user_id;
    return <div className={obj.dialog_item + ' ' + obj.active}>
        <NavLink to={path}>{props.user_name}</NavLink>
    </div>
}


export default DialogItem;