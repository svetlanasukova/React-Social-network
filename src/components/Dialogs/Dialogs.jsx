import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (p) => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink activeClassName={s.active} to="/dialogs/1">Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink activeClassName={s.active} to="/dialogs/2">Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink activeClassName={s.active} to="/dialogs/3">Victor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink activeClassName={s.active} to="/dialogs/4">Dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink activeClassName={s.active} to="/dialogs/5">Kate</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink activeClassName={s.active} to="/dialogs/6">Valery</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your day?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    );
}

export default Dialogs;