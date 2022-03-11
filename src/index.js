import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

/* 
ReactDOM can insert components into the DOM with the following syntax:

ReactDOM.render(<h1>Hello world</h1>, document.getElementById('root')); */

ReactDOM.render(<App />, document.getElementById('root'));