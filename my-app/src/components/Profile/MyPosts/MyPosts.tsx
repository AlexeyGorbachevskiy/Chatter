import React from 'react';
import obj from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div className={obj.posts}>
            <div className={obj.new_post}>
                {/*method="POST"*/}
                <form className={obj.new_post_form}>
                    <h2>New Post</h2>
                    <textarea placeholder={"Enter your news..."} rows={4} cols={60} id="new_post_text_area"
                              name="new_post_text_area"></textarea>
                    <button className={obj.new_post_button}
                            value={"Send"}>Send
                    </button>
                    {/*<input type="submit" value="Save" />*/}
                </form>
            </div>


            <Post message='Hey, how you doing?' like={5}/>
            <Post message="What's cooking, good looking?" like={8}/>


        </div>
    );
}


export default MyPosts;