import React from "react";
function Card(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <a target="_blank" href="c1.jpg">
        <img src={props.imgURL} alt="kangarooms-Agartala" className="card-img-top" />
      </a>
      <div className="card-body">

        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          <a target="_blank" href="swimmingpool.png"><img src={props.lpool} alt="kangarooms-Agartala" style={{ width: "20px", height: "20px" }} className="class5" /></a> {props.pool}<br />
          <a target="_blank" href="wifi.jpg"><img src={props.lwifi} alt="kangarooms-Agartala" style={{ width: "20px", height: "20px" }} className="class5" /></a>{props.wifi} <br />
          <a target="_blank" href="nobreakfast.jpg"><img src={props.lbreakfast} alt="kangarooms-Agartala" style={{ width: "20px", height: "20px" }} className="class5" /></a>{props.breakfast} <br />
          <a target="_blank" href="lovethemes.webp"><img src={props.ltheme} alt="kangarooms-Agartala" style={{ width: "20px", height: "20px" }} className="class5" /></a>{props.theme} <br />
          <a target="_blank" href="location1.html"><img src={props.llocation} alt="kangarooms-Agartala" style={{ width: "20px", height: "20px" }} className="class5" /></a> {props.location}<br />
          <a target="_blank" href="love_symbol.jpg"><img src={props.ltype} alt="kangarooms-Agartala" style={{ width: "20px", height: "20px" }} className="class5" /></a>{props.type} <br />
          <a target="_blank" href="vacancies.jpg"><img src={props.lavailable} alt="kangarooms-Agartala" style={{ width: "15px", height: "15px" }} /></a><span id="idhen">{props.available}</span> <br />
          <a target="_blank" href="booked.jpg"><img src={props.lbooked} alt="kangarooms-Agartala" style={{ width: "15px", height: "15px" }} /></a><span id="idhat">{props.booked}</span>
        </p>
        <pre>
          <a href="kangarooms-Book.html" className="btn btn-primary">Book</a> <button className="btn btn-primary" onClick="abc20()">Check-in</button> <button className="btn btn-primary" onClick="def20() ">Check-out</button>
        </pre>
      </div>
    </div>
  )
}
export default Card;