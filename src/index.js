import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { hydrate, render } from "react-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <>
      
      <App />
    </>
    , rootElement);
} else {
  render(
    <>
      <App />
    </>
    , rootElement);
}