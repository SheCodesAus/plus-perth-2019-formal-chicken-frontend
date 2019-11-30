import React from 'react';
import {Redirect} from 'react-router-dom'
import {RegisterForm} from '../sections/registerform';
import {LoginForm} from '../sections/loginform';



export function Registerpage(props){

    const [whichForm, setWhichFrom] = React.useState('login')

    return(
      <div>

        {props.loggedIn === true && <Redirect to="/account" />}
        {whichForm === 'login' && 
            <div>
                <LoginForm setLoggedIn={props.setLoggedIn} />
                <button onClick={() => setWhichFrom('register')}>I dont have an account!</button>
            </div>
        }
        {whichForm === 'register' &&
            <div>
                <RegisterForm />
                <button onClick={() => setWhichFrom('login')}>I already have an account!</button>
            </div>
        }

     
      </div>  
    )
}