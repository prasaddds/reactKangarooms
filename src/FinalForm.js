import React from "react";
import SignUpForm from "./SignupForm";
import IsLoggedInTrue from "./IsloggedInTrue";
var NoAccount=false;
function FinalForm()
{
    return (
        <div>
            {NoAccount? <SignUpForm/>:<IsLoggedInTrue/>}
        </div>
    )
}
export default FinalForm;