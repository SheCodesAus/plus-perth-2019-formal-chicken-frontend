import React from 'react';
import { useAppState, useSetAppState } from '../app-state'
import {Redirect} from 'react-router-dom'
import {RegisterForm} from '../sections/registerform';
import {LoginForm} from '../sections/loginform';
import "../pages/registerlogin.css";


export function Registerpage(props){

    const [whichForm, setWhichFrom] = React.useState('login')
    const { user } = useAppState()
    const setAppState = useSetAppState()

    const handleLoginSuccess = (userData) => {
        setAppState({ user: userData })
    }

    if (user) {
        return (
            <Redirect to="/account" />
        )
    }

    return(
        <>
      <div>

        {whichForm === 'login' && 
            <div>
                <LoginForm onLogin={handleLoginSuccess} />
                <button onClick={() => setWhichFrom('register')}>I dont have an account!</button>
            </div>
        }
        {whichForm === 'register' &&
            <div>
                <RegisterForm onRegister={handleLoginSuccess} />
                <button onClick={() => setWhichFrom('login')}>I already have an account!</button>
            </div>
        }
    <div className="containerme"></div>
     
      </div>  
      </>
    )
}