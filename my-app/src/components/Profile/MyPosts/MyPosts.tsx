import React from 'react';
import obj from './MyPosts.module.css';
import Post from './Post/Post';
import {ProfilePagePropsType, PostDataArray} from '../../../redux/state';

function MyPosts(props: ProfilePagePropsType) {

    let postElements = props.postData?.map((t: PostDataArray) => {
        return <Post message={t.message} like={t.like}/>
    });

    let test: any = React.createRef();
    const callback = () => {
        let text = test.current.value;
        alert(text);
    }

    return (
        <div className={obj.posts}>
            <div className={obj.new_post}>
                {/*method="POST"*/}
                <form className={obj.new_post_form}>
                    <h2>New Post</h2>
                    <textarea ref={test} placeholder={'Enter your news...'} rows={4} cols={60} id='new_post_text_area'
                              name='new_post_text_area'></textarea>
                    <button onClick={callback} className={obj.new_post_button}
                            value={'Send'}><i className='fa fa-paper-plane'></i> Send
                    </button>
                    {/*<input type="submit" value="Save" />*/}
                </form>
            </div>
            {postElements}
        </div>
    );
}


export default MyPosts;