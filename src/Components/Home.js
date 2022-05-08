import React from "react";
import Header from "../Header";
import "./HomeCss.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "../style1.css";
function Home()
{
    return (
        <div>
        <Header/>
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
                    <li><nav><Link to='/Vizag'>Agartala</Link></nav></li>
                    <li><nav><Link to='/Vizag'>Aizwal</Link></nav></li>
                    <li><nav><Link to='/Vizag'>Amaravathi</Link></nav></li>
                    <li><nav><Link to='/Vizag'>Bengaluru</Link></nav></li>
                    <li><nav><Link to='/Vizag'>Bhopal</Link></nav></li>
                    <li><nav><Link to='/Vizag'>Bhubaneswar</Link></nav></li>
                    <li><nav><Link to='/Vizag'>Chhattisgarh</Link></nav></li>
                    <li><nav><Link to='/Vizag'>Chennai</Link></nav></li>
                    <li><nav><Link to='/Vizag'>Dehradun</Link></nav></li>
                    <li><nav><Link to='/Vizag'>Dispur</Link></nav></li>
                    <li><nav><Link to='/Vizag'>Gandhinagar</Link></nav></li>
                    <li><nav><Link to='/Vizag'>Gangtok</Link></nav></li>
                    <li><nav><Link to='/Vizag'>Hyderabad</Link></nav></li>
                    <li><nav><Link to='/Vizag'>Imphal</Link></nav></li>
                    <li><nav><Link to='/Vizag'>Itanagar</Link></nav></li>
                    <li><nav><Link to='/Vizag'>Jaipur</Link></nav></li>
                    <li><nav><Link to='/Vizag'>Kohima</Link></nav></li>
                    <li><nav><Link to='/Vizag'>Kolkata</Link></nav></li>
                    <li><nav><Link to='/Vizag'>Lucknow</Link></nav></li>
                    <li><nav><Link to='/Vizag'>Mumbai</Link></nav></li>
                    <li><nav><Link to='/Vizag'>Panaji</Link></nav></li>
                    <li><nav><Link to='/Vizag'>Patna</Link></nav></li>
                    <li><nav><Link to='/Vizag'>Raipur</Link></nav></li>
                    <li><nav><Link to='/Vizag'>Ranchi</Link></nav></li>
                    <li><nav><Link to='/Vizag'>Shillong</Link></nav></li>
                    <li><nav><Link to='/Vizag'>Shimla</Link></nav></li>
                    <li><nav><Link to='/Vizag'>Thiruvunanthapuram</Link></nav></li>
      </ul>
      </div>
    )
}
export default Home;