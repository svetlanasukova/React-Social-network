import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (p) => {
    let path = "/dialogs/"+p.id;
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink activeClassName={s.active} to={path}>{p.name}</NavLink>
        </div>
    );
}

const Message = (p) => {
    return(
        <div className={s.message}>{p.message}</div>
    );
}

const Dialogs = (p) => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Sveta" id="1" />
                <DialogItem name="Dima" id="2" />
                <DialogItem name="Sasha" id="3" />
                <DialogItem name="Kate" id="4" />
                <DialogItem name="Victor" id="5" />
                <DialogItem name="Valery" id="6" />
            </div>
            <div className={s.messages}>
               <Message message="Hi!"/>
               <Message message="How are you?"/>
               <Message message="Yo"/>
            </div>
        </div>
    );
}

export default Dialogs;