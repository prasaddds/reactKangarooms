import React from "react";
import App from "./App";
import "./style1.css";
import Header from './Header';
import Header2 from "./Header2";
function IsLoggedInTrue() {
        return (
            <div>
                <Header />
                <Header2 />
                <App />
            </div>
        )
}
export default IsLoggedInTrue;
