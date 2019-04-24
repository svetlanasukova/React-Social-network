import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://www.pentair.com/en/_jcr_content/hero/hero-par/hero_image_449393854/image.img.jpg/1532547933301.jpg"/>
            </div>
            <div> ava + desc</div>
            <MyPosts />
        </div>
    );
}

export default Profile;