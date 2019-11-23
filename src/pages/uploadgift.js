import React from 'react';
import {Link} from 'react-router-dom';
import {Header} from '../sections/header';

export function Uploadgiftpage(){
    return(
      <div>
        <form action="/" method="post">
            <label>
                What is this gift (don't worry, only you can see this)
                <input type="text" name="giftname" />
            </label>
            <button type="submit">Find me a sista to gifta</button>
        </form>

        <Link to="/account">Go back to your account</Link>
      </div>  
    )
}