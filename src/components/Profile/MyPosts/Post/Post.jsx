import React from 'react';
import s from './Post.module.css';

const Post = (p) => {
    return (
        <div className={s.item}>
            <img src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/25/1498216547-avatar-neytiri.jpg"/>
            {p.message}
            <div>
                <span>like - {p.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;