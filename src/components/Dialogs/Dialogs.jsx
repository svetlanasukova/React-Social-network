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

    let dialogsData = [
        {id: 1, name: 'Sveta'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Kate'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valery'}
    ];

    let messagesData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ];

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
            </div>
            <div className={s.messages}>
               <Message message={messagesData[0].message} id={messagesData[0].id}/>
               <Message message={messagesData[1].message} id={messagesData[1].id}/>
               <Message message={messagesData[2].message} id={messagesData[2].id}/>
            </div>
        </div>
    );
}

export default Dialogs;