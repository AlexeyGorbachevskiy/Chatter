import React from 'react';
import obj from "./MyPosts.module.css";
import {Field, reduxForm} from "redux-form";

export function AddNewPostForm(props:any) {
    return (
        <form onSubmit={props.handleSubmit} className={obj.new_post_form}>
            <h2>New Post</h2>
            <Field className={obj.textarea} component='textarea' name='newPostText'
                   placeholder={'What\'s new...'} rows={4} cols={60}
            />
            <button className={obj.new_post_button}
                    value={'Post'}><i className='fa fa-paper-plane'/> Post
            </button>
        </form>
    )
}

export const AddNewPostFormRedux = reduxForm({form: 'AddNewPostForm'})(AddNewPostForm)