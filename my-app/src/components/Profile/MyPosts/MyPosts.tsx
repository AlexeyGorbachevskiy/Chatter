import React from 'react';
import obj from './MyPosts.module.css';
import Post from './Post/Post';
import {PostDataArray} from '../../../redux/state';

type MyPostsPropsType={
    postData: Array<PostDataArray>
    newPostText: string
    addPost: ()=>void
    updateNewPostText: (newText: string)=>void
}



function MyPosts(props:MyPostsPropsType ) {

    let postElements = props.postData.map((t: PostDataArray) => {
        return <Post message={t.message} like={t.like}/>
    });

    let textArea: any = React.createRef();

    let addPost = () => {
        // props.addPost && props.addPost(postMessage);
        props.addPost();
        // textArea.current.value = '';
    }

    let onPostChange = () => {
        let newText = textArea.current.value;
        // props.updateNewPostText && props.updateNewPostText(newText);
        props.updateNewPostText(newText);
    }

    return (
        <div className={obj.posts}>
            <div className={obj.new_post}>
                {/*method="POST"*/}
                <div className={obj.new_post_form}>
                    <h2>New Post</h2>
                    <textarea className={obj.textarea} onChange={onPostChange} value={props.newPostText} ref={textArea}
                              placeholder={'Enter your news...'} rows={4} cols={60} id='new_post_text_area'
                              name='new_post_text_area'/>
                    <button onClick={addPost} className={obj.new_post_button}
                            value={'Send'}><i className='fa fa-paper-plane'/> Send
                    </button>
                    {/*<input type="submit" value="Save" />*/}
                </div>
            </div>
            {postElements}
        </div>
    );
}


export default MyPosts;