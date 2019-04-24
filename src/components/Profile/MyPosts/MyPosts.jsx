import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi!', likesCount: 10},
        {id: 2, message: 'How are you?', likesCount: 15},
        {id: 3, message: 'Hi, how are you?', likesCount: 17},
        {id: 4, message: 'Its my first post', likesCount: 14},
        {id: 5, message: 'Yo', likesCount: 18}
    ];

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>);

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
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;