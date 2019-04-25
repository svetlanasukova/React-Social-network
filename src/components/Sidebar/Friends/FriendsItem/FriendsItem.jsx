import React from 'react';
import s from './FriendsItem.module.css';

const FriendsItem = (props) => {
    return(
        <div className={s.friendsItem}>
            <img src={props.img} />
            <div>{props.name}</div>
        </div>
    );
};

export default FriendsItem;