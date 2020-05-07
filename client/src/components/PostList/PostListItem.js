import React from 'react';
import {useHistory} from 'react-router-dom';
import slugify from 'slugify';

import './styles.css';
import EditPost from '../Post/EditPost';

const PostListItem= props =>{
    const{post, clickPost, deletePost}= props;
    const history= useHistory();

    const handleClickPost = post =>{
        const slug= slugify(post.title,{lower: true});

        clickPost(post);
        history.push(`/posts/${slug}`);
    };
    const handleEditPost= post=>{
        EditPost(post);
        history.push(`/edit-post/${post._id}`);
    };

    return(
        <div>
            <div className= "postListItem" onClick={()=> handleClickPost(post)}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
            <div className="postControls" onClick={()=> handleClickPost(post)}>
                <button onClick={()=> deletePost(post)}>Delete</button>
                <button onClick={()=> handleEditPost(post)}>Edit</button>
            </div>
        </div>
    );
};
export default PostListItem;