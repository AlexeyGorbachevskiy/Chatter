import React from 'react';
import obj from './Post.module.css';

type PostPropsType = {
    message: string,
    like: number
}

function Post(props: PostPropsType) {
    return (

        <div className={obj.old_posts}>
            <div className={obj.old_post_item}>
                <form className={obj.old_post_form}>
                    <div className={obj.user_name}><h4>Alexey Gorbachevskiy</h4></div>
                    <textarea rows={4} cols={60} id="new_post_text_area" name="new_post_text_area">
                        {props.message}
                            </textarea>
                    <div className={obj.buttons_wrapper}>
                        <div className={obj.like}><p>Like: {props.like}</p></div>

                        <div className={obj.extra_wrapper}>
                            <button className={obj.change_button}
                                    value={"Change"}>Change
                            </button>
                            <button className={obj.remove_button}
                                    value={"Remove"}>Remove
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {/*<div className={obj.old_post_item}>*/}
            {/*    <form className={obj.old_post_form}>*/}
            {/*        <div className={obj.user_name}><h4>Alexey Gorbachevskiy</h4></div>*/}
            {/*        <textarea rows={4} cols={60} id="new_post_text_area" name="new_post_text_area">*/}
            {/*                    What's cooking, good looking?*/}
            {/*                </textarea>*/}
            {/*        <div className={obj.buttons_wrapper}>*/}
            {/*            <button className={obj.change_button}*/}
            {/*                    value={"Change"}>Change*/}
            {/*            </button>*/}
            {/*            <button className={obj.remove_button}*/}
            {/*                    value={"Remove"}>Remove*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </form>*/}
            {/*</div>*/}
        </div>
    );
}


export default Post;