import React from "react";
import "./Home.css";
import Image from "../images/garden.jpg"
import Star from "../images/ratingstar.jpg"

function Home() {
  return (
    <>
      <div className="page1 ">
        <div className="page-left">
          <div>
            <h1>balaji <br />services</h1>
            <h3>five star garden service provider</h3>
          </div>
          <div className="page-left-buttom">
            <img src={Star} alt="" />
          </div>
        </div>

        <div className="page-right">
          <img src={Image} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
