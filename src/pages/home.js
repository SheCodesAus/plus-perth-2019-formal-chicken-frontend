import React from 'react';
import {About} from '../sections/aboutregifta';
import "../pages/home.css";

export function Homepage(){
    return(
        <>
        <div className="topheader">
            <h1> Sista Regifta  </h1>                   
        </div>
       
      
        <div className='bow'>
        <About/>
        </div>
        
        </>
    )
}

