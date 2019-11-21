import React from 'react';




export function RegisterForm(props){
    return(
        <form action="/" method="post">
            <h2>Register</h2>
            <label>
                User Name
                <input type='text' name='username'/>
            </label>
            <label>
                Email
                <input type='text' name='email'/>
            </label>
            <label>
                Address
                <input type='text' name='address'/>
            </label>
            <label>
                Password
                <input type='password' name='password'/>
            </label>
            <button type='submit'>
                Register
            </button>
        </form>
    )
}