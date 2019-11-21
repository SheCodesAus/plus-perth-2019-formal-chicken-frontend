import React from 'react';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom' // you have to do this with all the other links on the page



export function Header(props){
// outside of the html bit
const homeMenuButtonClass = props.currentPage === 'Home' ? 'activeMenuButton' : 'menuButton'
const accountMenuButtonClass = props.currentPage === 'Account' ? 'activeMenuButton' : 'menuButton'
const uploadButtonClass = props.currentPage === 'Upload' ? 'activeMenuButton' : 'menuButton'

    return(
        <div>
            <NavLink to="/home" activeClassName="active">Home</NavLink>
            <NavLink to="/account" activeClassName="active">Account</NavLink>
            <NavLink to="/uploadgift" activeClassName="active">Upload Gift</NavLink>
            <Link to='/registerlogin'>
                {props.loggedIn === true && 'Log Out'}
                {!props.loggedIn && 'Log In or Register'}
            </Link> 
            {console.log(props.currentPage)}
        </div> 
    )
}