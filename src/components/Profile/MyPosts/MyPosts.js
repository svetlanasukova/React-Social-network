import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
            <Post message="Hi, how are you?" like_counts="15"/>
            <Post message="Its my first post!" like_counts="20"/>
        </div>
    );
}

export default MyPosts;