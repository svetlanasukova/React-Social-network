import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {

    let navElements = props.links.map(l => <NavLink activeClassName={s.active} to={l.link}>{l.title}</NavLink>);

    return (
        <nav className={s.nav}>
            {navElements}
        </nav>
    );
}

export default Navbar;