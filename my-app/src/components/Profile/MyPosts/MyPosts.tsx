import React from 'react';
import obj from './MyPosts.module.css';
import Post from './Post/Post';

type PostDataArray = {
    id: number
    message: string
    like: number
}

export type MyPostsPropsType = {
    postData: Array<PostDataArray>
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

function MyPosts(props: MyPostsPropsType) {

    let postElements = props.postData.map((t: PostDataArray) => {
        return <Post key={t.id} message={t.message} like={t.like}/>
    });

    let textArea = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let newText = textArea.current!.value;
        props.updateNewPostText(newText);

    }

    return (
        <div className={obj.posts}>
            <div className={obj.new_post}>
                <div className={obj.new_post_form}>
                    <h2>New Post</h2>
                    <textarea className={obj.textarea} onChange={onPostChange} value={props.newPostText} ref={textArea}
                              placeholder={'What\'s new...'} rows={4} cols={60} id='new_post_text_area'
                              name='new_post_text_area'/>
                    <button onClick={onAddPost} className={obj.new_post_button}
                            value={'Post'}><i className='fa fa-paper-plane'/> Post
                    </button>
                </div>
            </div>
            {postElements}
        </div>
    );
}


export default MyPosts;