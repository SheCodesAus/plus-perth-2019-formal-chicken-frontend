import React from 'react';
import {Header} from '../sections/header';
import { useAppState } from '../app-state'
import { Redirect } from 'react-router-dom'
import "../pages/thankyou.css";

export function Thankyoupage(props){

    const { user } = useAppState()

    if (!user) {
      return (
        <Redirect to={'registerlogin'} />
      )
    }

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