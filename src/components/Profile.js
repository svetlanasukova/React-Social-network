import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return(
        <div className={s.content}>
            <div>
                <img src="https://www.pentair.com/en/_jcr_content/hero/hero-par/hero_image_449393854/image.img.jpg/1532547933301.jpg" />
            </div>
            <div> ava + desc</div>
            <div>
                my posts
                <div>new post</div>
                <div className={s.posts}>
                    <div className={s.item}>post 1</div>
                    <div className={s.item}>post 2</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;