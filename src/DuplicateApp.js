import {Route,Routes} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Vizag from "./Components/Vizag";
import SignUpForm2 from "./Components/SignupForm2";
import LoginForm2 from "./Components/LoginForm2";
function DuplicateApp2() {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='reactKangarooms' element={<Home />} />
            <Route path='About' element={<About />} />
            <Route path="ContactUs" element={<ContactUs/>}/>
            <Route path="Vizag" element={<Vizag/>}/>
            <Route path="SignUpForm2" element={<SignUpForm2/>}/>
            <Route path="LoginForm2" element={<LoginForm2/>}/>
        </Routes>
        </>
    )
}
export default DuplicateApp2;