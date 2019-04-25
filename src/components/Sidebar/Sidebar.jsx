import React from 'react';
import Navbar from './Navbar/Navbar'
import Friends from './Friends/Friends'
import s from './Sidebar.module.css';

const Sidebar = (props) => {
    return(
        <aside className={s.sidebar}>
            <Navbar links={props.state.navbar} />
            <Friends friends={props.state.friends} />
        </aside>
    );
}


export default Sidebar;