import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/25/1498216547-avatar-neytiri.jpg"/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;