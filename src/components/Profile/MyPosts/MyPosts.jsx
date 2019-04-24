import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hi!', likesCount: 10},
        {id: 2, message: 'How are you?', likesCount: 15},
        {id: 3, message: 'Hi, how are you?', likesCount: 17},
        {id: 4, message: 'Its my first post', likesCount: 14},
        {id: 5, message: 'Yo', likesCount: 18}
    ];

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount} id={postsData[0].id}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount} id={postsData[1].id}/>
                <Post message={postsData[2].message} likesCount={postsData[2].likesCount} id={postsData[2].id}/>
            </div>
        </div>
    );
}

export default MyPosts;