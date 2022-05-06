import React from "react";
import IsLoggedInTrue from "./IsloggedInTrue";
import InputFields from "./Form";
var isLoggedInn = false;
const currentTime=new Date();
function LoginComponents() {
    // if (isLoggedInn === true) {
    //     return (
    //         <div>
    //         <IsLoggedInTrue/>
    //         </div>
    //     )
    // }
    // else {
    //     return (
    //         <InputFields/>
    //     )
    // }
    return(
        <div>
        {isLoggedInn?<IsLoggedInTrue/>:<InputFields/>};
        
    </div>
    )
}
export default LoginComponents;