import React from 'react';
import s from './Friends.module.css';
import FriendsItem from './FriendsItem/FriendsItem';

const Friends = (props) => {

    let friendsElements = props.friends.map(f => <FriendsItem name={f.name} img={f.img}/>);
    return(
        <div className={s.friends}>
            <div className={s.title}>Friends</div>
            <div className={s.friendsWrapp}>
                {friendsElements}
            </div>
        </div>
    );
}

export default Friends;