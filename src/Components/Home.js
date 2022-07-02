import React from "react";
import Header from "../Header";
import "./HomeCss.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "../style1.css";
import Quote from "./quote";
function Home()
{
    return (
        <div>
        <Header/>
        <Quote/>
        <Navbar/>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images5.alphacoders.com/382/thumb-1920-382953.jpg" className="d-block w-100" alt="kangarooms" height={"500px"} width={"auto"}/>
            <div className="carousel-caption d-none d-md-block">
              </div>
          </div>
          <div className="carousel-item active">
            <img src="https://images5.alphacoders.com/382/thumb-1920-382953.jpg" className="d-block w-100" alt="kangarooms" height={"500px"} width={"auto"}/>
            <div className="carousel-caption d-none d-md-block">
              </div>
          </div>
          <div className="carousel-item active">
            <img src="https://images5.alphacoders.com/382/thumb-1920-382953.jpg" className="d-block w-100" alt="kangarooms" height={"500px"} width={"auto"}/>
            <div className="carousel-caption d-none d-md-block">
              </div>
          </div>
        </div>
      </div>
      
      <ul id="myUL">
                    <li><nav><Link to='/Agartala'>Agartala</Link></nav></li>
                    <li><nav><Link to='/Aizwal'>Aizwal</Link></nav></li>
                    <li><nav><Link to='/Amaravathi'>Amaravathi</Link></nav></li>
                    <li><nav><Link to='/Bengaluru'>Bengaluru</Link></nav></li>
                    <li><nav><Link to='/Bhopal'>Bhopal</Link></nav></li>
                    <li><nav><Link to='/Bhubaneswar'>Bhubaneswar</Link></nav></li>
                    <li><nav><Link to='/Chhattisgarh'>Chhattisgarh</Link></nav></li>
                    <li><nav><Link to='/Chennai'>Chennai</Link></nav></li>
                    <li><nav><Link to='/Dehradun'>Dehradun</Link></nav></li>
                    <li><nav><Link to='/Dispur'>Dispur</Link></nav></li>
                    <li><nav><Link to='/Gandhinagar'>Gandhinagar</Link></nav></li>
                    <li><nav><Link to='/Gangtok'>Gangtok</Link></nav></li>
                    <li><nav><Link to='/Hyderabad'>Hyderabad</Link></nav></li>
                    <li><nav><Link to='/Imphal'>Imphal</Link></nav></li>
                    <li><nav><Link to='/Itanagar'>Itanagar</Link></nav></li>
                    <li><nav><Link to='/Jaipur'>Jaipur</Link></nav></li>
                    <li><nav><Link to='/Kohima'>Kohima</Link></nav></li>
                    <li><nav><Link to='/Kolkata'>Kolkata</Link></nav></li>
                    <li><nav><Link to='/Lucknow'>Lucknow</Link></nav></li>
                    <li><nav><Link to='/Mumbai'>Mumbai</Link></nav></li>
                    <li><nav><Link to='/Panaji'>Panaji</Link></nav></li>
                    <li><nav><Link to='/Patna'>Patna</Link></nav></li>
                    <li><nav><Link to='/Raipur'>Raipur</Link></nav></li>
                    <li><nav><Link to='/Ranchi'>Ranchi</Link></nav></li>
                    <li><nav><Link to='/Shillong'>Shillong</Link></nav></li>
                    <li><nav><Link to='/Shimla'>Shimla</Link></nav></li>
                    <li><nav><Link to='/Thiruvunanthapuram'>Thiruvunanthapuram</Link></nav></li>
      </ul>
      </div>
    )
}
export default Home;