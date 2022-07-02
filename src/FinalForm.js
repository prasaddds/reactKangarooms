import React from "react";
import SignUpForm from "./Components/SignupForm";
import IsLoggedInTrue from "./IsloggedInTrue";
var NoAccount=true;
function FinalForm()
{
    return (
        <div>
            {NoAccount? <SignUpForm/>:<IsLoggedInTrue/>}
        </div>
    )
}
export default FinalForm;