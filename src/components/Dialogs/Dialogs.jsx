import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (p) => {
    let path = "/dialogs/" + p.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink activeClassName={s.active} to={path}>{p.name}</NavLink>
        </div>
    );
}

const Message = (p) => {
    return (
        <div className={s.message}>{p.message}</div>
    );
}

const Dialogs = (p) => {

    let dialogs = [
        {id: 1, name: 'Sveta'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Kate'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valery'}
    ];
    let messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;