import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (p) => {
    let path = "/dialogs/" + p.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink activeClassName={s.active} to={path}>{p.name}</NavLink>
        </div>
    );
}


export default DialogItem;