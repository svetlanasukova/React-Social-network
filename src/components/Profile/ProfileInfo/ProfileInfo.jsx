import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://www.pentair.com/en/_jcr_content/hero/hero-par/hero_image_449393854/image.img.jpg/1532547933301.jpg"/>
            </div>
            <div className={s.descriptionBlock}> ava + desc</div>
        </div>
    );
}

export default ProfileInfo;