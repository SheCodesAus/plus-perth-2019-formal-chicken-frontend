import React from 'react';
import {Header} from '../sections/header';
import "../pages/thankyou.css";

export function Thankyoupage(props){
    // I will eventually contact django here
    const handleFormSubmit = (e) => {
      e.preventDefault()
      props.setLoggedIn(true)
  }

  return(
      <>
      <form action="/" method="post" onSubmit={handleFormSubmit}>
          <h2>Send your thank you to *Their name here* </h2>
          <label>
              Warm and fuzzy message:
              <input type="thankyou" name='thankyou'/>
          </label>
          <button class = "mybutt" type='submit'>Send</button>
      </form>
      <div className="thankx">
          
      </div>
      </>
  )
}