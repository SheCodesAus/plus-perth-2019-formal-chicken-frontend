import React from 'react';

export function LoginForm(props){

    // I will eventually contact django here
    const handleFormSubmit = (e) => {
        e.preventDefault()
        props.setLoggedIn(true)
    }

    return(
        <form action="/" method="post" onSubmit={handleFormSubmit}>
            <h2>Login</h2>
            <label>
                Email
                <input type='text' name='email'/>
            </label>
            <label>
                Password
                <input type="password" name='password'/>
            </label>
            <button type='submit'>Login</button>
        </form>
    )
}