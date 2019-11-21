import React from 'react';

import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {Header} from './sections/header'
import {Accountpage} from './pages/account';
import {Registerpage} from './pages/registerlogin';
import {Thankyoupage} from './pages/thankyou';
import {Uploadgiftpage} from './pages/uploadgift';
import {Homepage} from './pages/home';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
//State logged in 
//state 

function App() {

  const [ loggedIn, setLoggedIn ] = React.useState(false)
  const [ currentPage, setCurrentPage]  = React.useState('home'); //default to home page
  
  return (
    <Router>

      <Header loggedIn={loggedIn} currentPage = {currentPage} setCurrentPage = {setCurrentPage}/>

      <Switch>
        <Route path="/account">
          <Accountpage/>
        </Route>
        <Route path="/registerlogin">
          <Registerpage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </Route>
        <Route path="/thankyou">
          <Thankyoupage />
        </Route>
        <Route path="/uploadgift">
          <Uploadgiftpage/>
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
