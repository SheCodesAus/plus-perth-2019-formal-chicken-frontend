import React from 'react';
import {login} from '../api/api';

export function LoginForm(props){
    const [username, setusername] = React.useState('');
    const [password, setpassword] = React.useState('');

    const [error, setLoginError] = React.useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        setLoginError(null)
        try {
            const user = await login(username, password)
            props.onLogin(user)
        } catch (error) {
            setLoginError(error.detail)
        }
    }

    const handlesetusername = (e) => {
        setusername(e.target.value)
    }

    const handlesetpassword = (e) => {
        setpassword(e.target.value)
    }

    return(
        <form action="/" method="post" onSubmit={handleFormSubmit}>
            <h2>Login</h2>
            <label>
                username
                <input value={username} type='text' name='username' onChange={handlesetusername} required/>
            </label>
            <label>
                password
                <input value={password} type="password" name='password' onChange={handlesetpassword} required/>
            </label>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <button type='submit'>Login</button>
        </form>
    )
}