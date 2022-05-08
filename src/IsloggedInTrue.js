import React from "react";
import App from "./App";
import "./style1.css";
import Header from './Header';
import Navbar from "./Components/Navbar";
function IsLoggedInTrue() {
        return (
            <div>
                <Header />
                <Navbar/>
                <App />
            </div>
        )
}
export default IsLoggedInTrue;
