import React from 'react';
import obj from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    let postData = [
        {id: 1, message: "Hey, how you doing?", like: 5},
        {id: 2, message: "What's cooking, good looking?", like: 8}
    ];
    let postElements = postData.map((t) => {
        return <Post message={t.message} like={t.like}/>
    });

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
            {postElements}
        </div>
    );
}


export default MyPosts;