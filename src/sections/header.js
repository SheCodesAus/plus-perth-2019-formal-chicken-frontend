import React from 'react';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom' // you have to do this with all the other links on the page
import {bro} from '../sections/bro'
import "../sections/header.css";



export function Header(props){
// outside of the html bit
const homeMenuButtonClass = props.currentPage === 'Home' ? 'activeMenuButton' : 'menuButton'
const accountMenuButtonClass = props.currentPage === 'Account' ? 'activeMenuButton' : 'menuButton'
const uploadButtonClass = props.currentPage === 'Upload' ? 'activeMenuButton' : 'menuButton'

    return(
        
    //     <div className="nav">
            
    //         <ul >
    //             <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
    //             <li><NavLink to="/account" activeClassName="active">Account</NavLink></li>
    //             <li><NavLink to="/uploadgift" activeClassName="active">Upload Gift</NavLink></li>
    //             <li>
    //             <Link to='/registerlogin'>
    //                 {props.loggedIn === true && 'Log Out'}
    //                 {!props.loggedIn && 'Log In / Register'}
    //             </Link> 
    //             {console.log(props.currentPage)}
                
    //             </li>
    //         </ul>
    //     </div> 
    // )

 
<>


<nav class="navbar">

<h3>rehome your unwanted gifts ...</h3>

        <span class="navbar-toggle" id="js-navbar-toggle">
            <i class="fas fa-bars"></i>
        </span>
     
        
        <ul class="main-nav" id="js-menu">
            <li>
                <a href="/home" actveclassName="nav-links">Home</a>
            </li>
            <li>
                <a href="/account" actveclassName="nav-links">Me </a>
            </li>
            <li>
                <a href="/uploadgift" actveclassName="nav-links">reGift</a>
            </li>
            <li>
            <Link to='/registerlogin'>
                     {props.loggedIn === true && 'Log Out'}
                     {!props.loggedIn && 'Sign In/Up'}
            </Link> 
            {console.log(props.currentPage)}
            </li>
        </ul>
    </nav>
</>

    )
}

