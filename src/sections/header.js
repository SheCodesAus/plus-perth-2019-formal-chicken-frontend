import React from 'react';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom' // you have to do this with all the other links on the page
import {bro} from '../sections/bro'
import "../sections/header.css";
import { useAppState, useSetAppState } from '../app-state';
import { logout } from '../api/api'

export function Header(props){

    const { user } = useAppState()
    const setAppState = useSetAppState()

    const handleLogOutClick = async (e) => {
        e.preventDefault()
        await logout()
        setAppState({ user: null })
    }

    return (
        <nav className="navbar">

            <h3>rehome your unwanted gifts ...</h3>

            <span className="navbar-toggle" id="js-navbar-toggle">
                <i className="fas fa-bars"></i>
            </span>
        
            
            <ul className="main-nav" id="js-menu">
                <li>
                    <NavLink to="/home" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/account" activeClassName="active">Account</NavLink>
                </li>
                <li>
                    <NavLink to="/uploadgift" activeClassName="active">Upload Gift</NavLink>
                </li>
                <li>
                    {!user && <Link to='/registerlogin'>Sign In/Up</Link>}
                    {user && <button onClick={handleLogOutClick}>Logout</button>}
                </li>
            </ul>
        </nav>

    )
}

