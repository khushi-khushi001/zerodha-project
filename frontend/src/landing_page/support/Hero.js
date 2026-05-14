import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href=""  style={{textDecoration:"none"}}>Track Tickets</a>
      </div>
      <div className="row p-5">
        <div className="col-6 p-3">
          <h1 className="fs-5 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" className="fs-6 mb-3"/>
          <br />
          <a href="" style={{textDecoration:"none"}} className="fs-6">Track account opening</a>
          <a href="" style={{textDecoration:"none"}} className="fs-6">Track segment activation</a>
          <a href="" style={{textDecoration:"none"}} className="fs-6">Intraday margins</a>
          <a href="" style={{textDecoration:"none"}} className="fs-6">Kite user manual</a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-5 mb-2">Featured</h1>
          <ol>
            <li className="fs-6">
              <a href="" style={{textDecoration:"none"}} >Current Takeovers and Delisting - January 2024</a>
            </li>
            <li className="fs-6">
              <a href="" style={{textDecoration:"none"}} >Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;