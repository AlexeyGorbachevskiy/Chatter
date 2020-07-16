import React from 'react';
import obj from "./MessageItem.module.css";
import {Field} from "redux-form";
import {reduxForm} from "redux-form";


export function AddMessageForm(props: any) {

    return (
        <form onSubmit={props.handleSubmit} className={obj.input_container}>
            <Field component='textarea'
                   name='newMessageBody'
                   className={obj.input}
                   placeholder={'Write a message...'}/>
            <button className={obj.send_btn}> Send</button>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({form: 'AddMessageForm'})(AddMessageForm)