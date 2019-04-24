import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
    return (
        <div>
            My posts
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
            <Post message="Hi, how are you?" likesCount="15"/>
            <Post message="Its my first post!" likesCount="20"/>
        </div>
    );
}

export default MyPosts;