// import {Route,Routes} from "react-router-dom";
// import Home from "./Components/Home";
// import About from "./Components/About";
// function DuplicateApp() {
//     return (
//         <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='About' element={<About/>}/>
//     </Routes>
//     )
// }
// export default DuplicateApp;

import {Route,Routes} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
function DuplicateApp2() {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='About' element={<About />} />
            <Route path="ContactUs" element={<ContactUs/>}/>
        </Routes>
        </>
    )
}
export default DuplicateApp2;