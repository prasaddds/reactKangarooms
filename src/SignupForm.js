import React from "react";
import InputField2 from "./InputField1";
import InputField3 from "./InputField2";
import InputField4 from "./inputField4";
import RegisterButton from "./RegisterButton";
function SignUpForm()
{
    return (
        <div>
        <form className="formclass1 form">
            <h1>Fill up your details</h1>
            <InputField2/>
            <InputField3/>
            <InputField4/>
            <RegisterButton/>
        </form>
        </div>
    )
}
export default SignUpForm;