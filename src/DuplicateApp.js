import {Route,Routes} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Dfault from "./Components/Dfault";
import SignUpForm2 from "./Components/SignupForm2";
import LoginForm2 from "./Components/LoginForm2";
import Aizwal from "./Components/Aizwal";
import Agartala from "./Components/Agartala";
import Amaravathi from "./Components/Amaravathi";
import Bengaluru from "./Components/Bengaluru";
import Bhopal from "./Components/Bhopal";
import Bhubaneswar from "./Components/Bhubaneswar";
import Chennai from "./Components/Chennai";
import Chhattisgarh from "./Components/Chhattisgarh";
import Dehradun from "./Components/Dehradun";
import Dispur from "./Components/Dispur";
import Gandhinagar from "./Components/Gandhinagar";
import Gangtok from "./Components/Gangtok";
import Hyderabad from "./Components/Hyderabad";
import Imphal from "./Components/Imphal";
import Itanagar from "./Components/Itanagar";
import Jaipur from "./Components/Jaipur";
import Kohima from "./Components/Kohima";
import Kolkata from "./Components/Kolkata";
import Lucknow from "./Components/Lucknow";
import Mumbai from "./Components/Mumbai";
import Panaji from "./Components/Panaji";
import Patna from "./Components/Patna";
import Raipur from "./Components/Raipur";
import Ranchi from "./Components/Ranchi";
import Shillong from "./Components/Shillong";
import Shimla from "./Components/Shimla";
import Thiruvunanthapuram from "./Components/Thiruvunanthapuram";
function DuplicateApp2() {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='reactKangarooms' element={<Home />} />
            <Route path='About' element={<About />} />
            <Route path="ContactUs" element={<ContactUs/>}/>
            <Route path="Dfault" element={<Dfault/>}/>
            <Route path="Agartala" element={<Agartala/>}/>
            <Route path="Aizwal" element={<Aizwal/>}/>
            <Route path="Amaravathi" element={<Amaravathi/>}/>
            <Route path="Bengaluru" element={<Bengaluru/>}/>
            <Route path="Bhopal" element={<Bhopal/>}/>
            <Route path="Bhubaneswar" element={<Bhubaneswar/>}/>
            <Route path="Chhattisgarh" element={<Chhattisgarh/>}/>
            <Route path="Chennai" element={<Chennai/>}/>
            <Route path="Dehradun" element={<Dehradun/>}/>
            <Route path="Dispur" element={<Dispur/>}/>
            <Route path="Gandhinagar" element={<Gandhinagar/>}/>
            <Route path="Gangtok" element={<Gangtok/>}/>
            <Route path="Hyderabad" element={<Hyderabad/>}/>
            <Route path="Imphal" element={<Imphal/>}/>
            <Route path="Itanagar" element={<Itanagar/>}/>
            <Route path="Jaipur" element={<Jaipur/>}/>
            <Route path="Kohima" element={<Kohima/>}/>
            <Route path="Kolkata" element={<Kolkata/>}/>
            <Route path="Lucknow" element={<Lucknow/>}/>
            <Route path="Mumbai" element={<Mumbai/>}/>
            <Route path="Panaji" element={<Panaji/>}/>
            <Route path="Patna" element={<Patna/>}/>
            <Route path="Raipur" element={<Raipur/>}/>
            <Route path="Ranchi" element={<Ranchi/>}/>
            <Route path="Shillong" element={<Shillong/>}/>
            <Route path="Shimla" element={<Shimla/>}/>
            <Route path="Thiruvunanthapuram" element={<Thiruvunanthapuram/>}/>
            <Route path="SignUpForm2" element={<SignUpForm2/>}/>
            <Route path="LoginForm2" element={<LoginForm2/>}/>
        </Routes>
        </>
    )
}
export default DuplicateApp2;