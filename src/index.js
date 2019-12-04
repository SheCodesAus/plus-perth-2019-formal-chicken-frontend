import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));



let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});