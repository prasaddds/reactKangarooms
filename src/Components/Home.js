import React from "react";
import Header from "../Header";
import "./HomeCss.css";
import Navbar from "./Navbar";
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
                    <li><a href="kangarooms-Agartala.html">Agartala</a></li>
                    <li><a href="kangarooms-Aizawl.html">Aizawl</a></li>
                    <li><a href="kangarooms-Amaravathi.html">Amaravathi</a></li>
                    <li><a href="kangarooms-Bengaluru.html">Bengaluru</a></li>
                    <li><a href="kangarooms-Bhopal.html">Bhopal</a></li>
                    <li><a href="kangarooms-Bhubaneswar.html">Bhubaneswar</a></li>
                    <li><a href="kangarooms-chhattisgarh.html">chhattisgarh</a></li>
                    <li><a href="kangarooms-Chennai.html">Chennai</a></li>
                    <li><a href="kangarooms-Dehradun.html">Dehradun </a></li>
                    <li><a href="kangarooms-Dispur.html">Dispur</a></li>
                    <li><a href="kangarooms-Gandhinagar.html">Gandhinagar</a></li>
                    <li><a href="kangarooms-Gangtok.html">Gangtok</a></li>
                    <li><a href="kangarooms-Hyderabad.html">Hyderabad</a></li>
                    <li><a href="kangarooms-Imphal.html">Imphal</a></li>
                    <li><a href="kangarooms-Itanagar.html">Itanagar</a></li>
                    <li><a href="kangarooms-Jaipur.html">Jaipur</a></li>
                    <li><a href="kangarooms-Kohima.html">Kohima</a></li>
                    <li><a href="kangarooms-Kolkata.html">Kolkata</a></li>
                    <li><a href="kangarooms-Lucknow.html">Lucknow</a></li>
                    <li><a href="kangarooms-Mumbai.html">Mumbai</a></li>
                    <li><a href="kangarooms-Panaji.html">Panaji</a></li>
                    <li><a href="kangarooms-Patna.html">Patna</a></li>
                    <li><a href="kangarooms-Raipur.html">Raipur</a></li>
                    <li><a href="kangarooms-Ranchi.html">Ranchi</a></li>
                    <li><a href="kangarooms-Shillong.html">Shillong</a></li>
                    <li><a href="kangarooms-Shimla.html">Shimla</a></li>
                    <li><a href="kangarooms-Thiruvananthapuram.html">Thiruvananthapuram</a></li>
      </ul>
      </div>
    )
}
export default Home;