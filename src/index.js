
// import React from 'react';
// import ReactDom from 'react-dom';
// import "./style1.css";
// import FinalForm from "./FinalForm.js";
// import Home from "./Components/Home"
// ReactDom.render(
//     <div>
//     <Home/>
//     <FinalForm/>
//     </div>,
//  document.getElementById('root')
// );



import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import DuplicateApp from "./DuplicateApp";
ReactDOM.render(
  <BrowserRouter>
    <DuplicateApp/>
  </BrowserRouter>,
  document.getElementById('root')
)